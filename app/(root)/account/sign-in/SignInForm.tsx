"use client";

import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SignInUserSchema } from "@/prisma/user.schema";
import { IUserSignIn } from "@/types";

const SignInForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IUserSignIn>({
    resolver: zodResolver(SignInUserSchema),
  });

  const onSubmit = async (data: IUserSignIn) => {
    setError("");

    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center bg-[rgb(0,51,102)] pt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gradient-to-br from-blue-800 via-sky-700 to-sky-600 border border-sky-300/40 rounded-2xl shadow-2xl p-10 w-full max-w-xl text-white space-y-8"
      >
        <h1 className="text-3xl font-extrabold text-center text-white">
          SIGN IN
        </h1>

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

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

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl py-3 text-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-sky-400"
        >
          {isSubmitting ? "Signing In..." : "Sign In With Email"}
        </button>

        {/* OAuth Section */}
        <div className="text-center">
          <h2 className="font-semibold text-white text-lg md:text-xl lg:text-2xl bg-red-500 p-2">
            OR
          </h2>
          <p className="text-gray-200 text-base pt-5 underline">SIGN IN WITH</p>
        </div>

        <div className="flex justify-center gap-6">
          <button
            type="button"
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
            type="button"
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
          <p className="text-lg">NEW HERE?</p>
          <Link
            href="/account/sign-up"
            className="text-yellow-300 hover:underline font-medium text-lg"
          >
            CREATE AN ACCOUNT
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
