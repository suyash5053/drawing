import z from "zod";

export const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string({ required_error: "Password is required" }).min(8).max(16),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string({ required_error: "Password is required" }),
});
