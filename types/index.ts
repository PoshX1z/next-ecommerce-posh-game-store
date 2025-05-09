import { z } from "zod";
import { ProductInputSchema } from "../prisma/product.schema";
import { SignInUserSchema, SignUpUserSchema } from "@/prisma/user.schema";
import { NewsInputSchema } from "@/prisma/news.schema";

export type IProductInput = z.infer<typeof ProductInputSchema>;
export type IUserSignIn = z.infer<typeof SignInUserSchema>;
export type IUserSignUp = z.infer<typeof SignUpUserSchema>;
export type INewsInput = z.infer<typeof NewsInputSchema>;

export type DataType = {
  products: IProductInput[];
  news: INewsInput[];
  headerMenus: { name: string; href: string }[];
  homeCarousels: {
    name: string;
    image: string;
    href: string;
    buttonCaption: string;
  }[];
};
