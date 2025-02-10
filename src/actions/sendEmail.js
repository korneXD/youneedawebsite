"use server";

import { env } from "@/app/lib/zod";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export default async function sendEmail(formData) {
  const name = formData.name;
  const email = formData.email;
  const message = formData.message;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "korcika2005@gmail.com",
      subject: "You need a website - " + name + " - " + email,
      replyTo: email,
      text: message,
    });
  } catch (error) {
    console.log(error);
  }
}
