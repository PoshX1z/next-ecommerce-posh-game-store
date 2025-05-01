"use client";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignInForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/");
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="flex justify-center items-center bg-[rgb(0,51,102)] pt-10">
      <form
        onSubmit={handleCredentialsLogin}
        className="bg-gradient-to-br from-blue-800 via-sky-700 to-sky-600 border border-sky-300/40 rounded-2xl shadow-2xl p-10 w-full max-w-xl text-white space-y-8"
      >
        <h1 className="text-3xl font-extrabold text-center text-white">
          Sign In
        </h1>
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <div>
          <label className="block mb-1 text-lg md:text-xl font-semibold text-white">
            Email
          </label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full h-10"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl py-3 text-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-sky-400"
        >
          Sign In With Email
        </button>

        <div className="text-center">
          <h2 className="font-semibold text-white text-lg md:text-xl lg:text-2xl bg-red-500 p-2 w">
            OR
          </h2>
          <p className="text-gray-200 text-base md:text-lg lg:text-xl pt-5 underline">
            Sign in with
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-10 h-10 rounded-full overflow-hidden border border-white hover:scale-110 transition"
          >
            <Image
              src="/images/icons/google.jpg"
              alt="Google"
              width={40}
              height={40}
            />
          </button>
          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="w-10 h-10 rounded-full overflow-hidden border border-white hover:scale-110 transition"
          >
            <Image
              src="/images/icons/github.png"
              alt="GitHub"
              width={40}
              height={40}
            />
          </button>
        </div>

        <div className="text-center text-sm text-white">
          <p className="text-lg md:text-xl">New here?</p>
          <Link
            href="/account/sign-up"
            className="text-yellow-300 hover:underline font-medium text-lg md:text-xl"
          >
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
