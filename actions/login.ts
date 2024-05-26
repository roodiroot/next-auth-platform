"use server";

import * as z from "zod";
import bcrypt from "bcrypt";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

export const login = async (value: z.infer<typeof LoginSchema>) => {
  const validatedFiled = LoginSchema.safeParse(value);

  if (!validatedFiled.success) {
    return { error: "Введены не верные данные" };
  }

  const { email, password } = validatedFiled.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Не верные данные для входа" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Подтверждение отправлено на email" };
  }

  const confirmPassword = await bcrypt.compare(password, existingUser.password);
  if (!confirmPassword) {
    return { error: "Не верные данные для входа" };
  }

  try {
    await signIn("credentials", {
      email,
      password: existingUser.password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Ошибка авторизации" };
        default:
          return { error: "Что то пошло не так" };
      }
    }

    throw error;
  }
};
