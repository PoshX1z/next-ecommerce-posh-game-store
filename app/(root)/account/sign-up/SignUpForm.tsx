"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpUserSchema } from "@/prisma/user.schema";
import { IUserSignUp } from "@/types";

const SignUpForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IUserSignUp>({
    resolver: zodResolver(SignUpUserSchema),
  });

  const onSubmit = async (data: IUserSignUp) => {
    setServerError("");
    setSuccess("");

    const res = await fetch("/api/auth/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      setServerError(result.error || "Failed to register.");
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
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gradient-to-br from-blue-800 via-sky-700 to-sky-600 border border-sky-300/40 rounded-2xl shadow-2xl p-10 w-full max-w-xl text-white space-y-8"
      >
        <h1 className="text-3xl font-extrabold text-center text-white">
          Create an Account
        </h1>

        {serverError && (
          <p className="text-red-500 text-sm text-center">{serverError}</p>
        )}
        {success && (
          <p className="text-green-500 text-sm text-center">{success}</p>
        )}

        {/* Name */}
        <div>
          <label className="block mb-1 text-lg font-semibold text-white">
            Name
          </label>
          <Input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
            className="w-full h-10"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-lg font-semibold text-white">
            Email
          </label>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full h-10"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-lg font-semibold text-white">
            Password
          </label>
          <Input
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            className="w-full h-10"
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 text-lg font-semibold text-white">
            Confirm Password
          </label>
          <Input
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword")}
            className="w-full h-10"
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl py-3 text-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-sky-400"
        >
          {isSubmitting ? "Creating Account..." : "Sign Up"}
        </button>

        <div className="text-center text-sm text-white">
          <p className="text-lg">Already have an account?</p>
          <Link
            href="/account/sign-in"
            className="text-yellow-300 hover:underline font-medium text-lg"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
