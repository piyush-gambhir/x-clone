"use server";
import { signIn } from "@auth";

export default async function authenticate(credentials: {
  email: string;
  password: string;
}) {
  try {
    await signIn("credentials", credentials);
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialSignin";
    }
    throw error;
  }
}
