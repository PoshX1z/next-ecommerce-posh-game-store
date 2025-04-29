"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

export default function SignInMenu() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 border rounded shadow max-w-md mx-auto mt-8">
      {session ? (
        <>
          <h2 className="text-xl font-bold">Welcome, {session.user?.name}!</h2>
          <p className="mb-4">You are logged in as {session.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            Log Out
          </button>
        </>
      ) : (
        <div>
          <button
            onClick={() => signIn("google")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Login with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Login with Github
          </button>
        </div>
      )}
    </div>
  );
}
