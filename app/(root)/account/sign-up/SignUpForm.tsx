"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUpForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const res = await fetch("/api/auth/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Failed to register.");
    } else {
      setSuccess("User created successfully! Redirecting to sign-in page...");
      setTimeout(() => {
        router.push("/account/sign-in");
      }, 2000);
    }
  };

  return (
    <div className="flex justify-center items-center bg-[rgb(0,51,102)] pt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-blue-800 via-sky-700 to-sky-600 border border-sky-300/40 rounded-2xl shadow-2xl p-10 w-full max-w-xl text-white space-y-8"
      >
        <h1 className="text-3xl font-extrabold text-center text-white">
          Create an Account
        </h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-600 mb-2">{success}</p>}

        <div>
          <label className="block mb-1 text-lg md:text-xl font-semibold text-white">
            Name
          </label>
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full h-10"
          />
        </div>

        <div>
          <label className="block text-lg md:text-xl mb-1 font-semibold text-white">
            Email
          </label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full h-10"
          />
        </div>
        <div>
          <label className="block text-lg md:text-xl mb-1 font-semibold text-white">
            Password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full h-10"
          />
        </div>
        <div>
          <label className="block text-lg md:text-xl mb-1 font-semibold text-white">
            Confirm Password
          </label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full h-10"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl py-3 text-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-sky-400"
        >
          Sign Up
        </button>

        <div className="text-center text-sm text-white">
          <p className="text-lg md:text-xl">Already have an account?</p>
          <Link
            href="/account/sign-in"
            className="text-yellow-300 hover:underline font-medium text-lg md:text-xl"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
