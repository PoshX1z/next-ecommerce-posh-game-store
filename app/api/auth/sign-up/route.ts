import { prisma } from "@/prisma/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password, confirmPassword } = body;

  // Warning if something isn't filled
  if (!name || !email || !password || !confirmPassword) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }
  if (password != confirmPassword) {
    return NextResponse.json(
      {
        error: "Passwords do not match.",
      },
      { status: 400 }
    );
  }
  // Warning if email is already exist
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json(
      { error: "Email already in use." },
      { status: 400 }
    );
  }

  // Sign up function, start with hash password, create user in database, return message
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return NextResponse.json({
    message: "User created.",
    user: { id: user.id, email: user.email },
  });
}
