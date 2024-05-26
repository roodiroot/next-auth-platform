import { UserRole } from "@prisma/client";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Введите email",
  }),
  password: z.string().min(1, { message: "Пароль должен быть" }),
});
export const ForgotPasswordSchema = z.object({
  email: z.string().email({
    message: "Введите email",
  }),
});
export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Минимум 6 символов" }),
});
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Введите email",
  }),
  password: z.string().min(6, { message: "Минимум 6 символов" }),
  name: z.string().min(1, {
    message: "Введите имя",
  }),
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    { message: "Новый пароль должен быть", path: ["newPassword"] }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    { message: "Пароль должен быть", path: ["password"] }
  );
