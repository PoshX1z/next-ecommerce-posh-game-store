import { z } from "zod";
import { ProductInputSchema } from "../prisma/product.schema";
import { SignInUserSchema, SignUpUserSchema } from "@/prisma/user.schema";

export type IProductInput = z.infer<typeof ProductInputSchema>;
export type IUserSignIn = z.infer<typeof SignInUserSchema>;
export type IUserSignUp = z.infer<typeof SignUpUserSchema>;

export type DataType = {
  products: IProductInput[];
  headerMenus: { name: string; href: string }[];
  homeCarousels: {
    name: string;
    image: string;
    href: string;
    buttonCaption: string;
  }[];
};
