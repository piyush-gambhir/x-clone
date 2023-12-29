import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Page Not Found / X",
  description: "Formely Twitter, now X",
};

import Link from "next/link";

import Button from "@components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 py-5 px-3">
      <div className="mb-7 text-[15px] font-normal leading-5 text-[#536471]">
        Hmm...this page doesn&apos;t exist. Try searching for something else.
      </div>
      <Link href="/explore">
        <Button className="bg-twitter-blue text-white font-bold py-2 px-4">
          Search
        </Button>
      </Link>
    </div>
  );
}
