import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Log in to Twitter / X",
};

import SignInModal from "@components/login/signin-modal";
export default function page() {
  return <SignInModal />;
}
