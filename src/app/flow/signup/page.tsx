import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign Up / X",
  description: "Sign Up / X",
};

import { SignUpModal } from "@/components/Login";

export default function page() {
  return (
    <div>
      <SignUpModal />
    </div>
  );
}
