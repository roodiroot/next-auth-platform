import * as nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT || 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_HOST_USER || "localhost",
    pass: process.env.EMAIL_HOST_PASSWORD || "localhost",
  },
  tls: {
    rejectUnauthorized: false,
  },
} as nodemailer.TransportOptions);
