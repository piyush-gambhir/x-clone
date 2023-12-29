import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "X. It's what's happening / X",
  description: "X",
};

const FooterLinks = [
  ["About", "https://about.twitter.com"],
  ["Help Center", "https://help.twitter.com"],
  ["Terms of Service", "https://twitter.com/tos"],
  ["Privacy Policy", "https://twitter.com/tos"],
  ["Cookie Policy", "https://support.twitter.com/articles/20170514"],
  ["Accessibility", "https://help.twitter.com/resources/accessibility"],
  [
    "Ads Info",
    "https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html",
  ],
  ["Blog", "https://blog.twitter.com"],
  ["Status", "https://status.twitterstat.us"],
  ["Careers", "https://careers.twitter.com"],
  ["Brand Resources", "https://about.twitter.com/press/brand-assets"],
  ["Advertising", "https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise"],
  ["Marketing", "https://marketing.twitter.com"],
  ["X for Business", "https://business.twitter.com"],
  ["Developers", "https://developer.twitter.com"],
  ["Directory", "https://twitter.com/i/directory/profiles"],
  ["Settings", "https://twitter.com/settings"],
];

import Link from "next/link";
import cn from "clsx";

import SocialLoginButtons from "@components/ui/social-login-buttons";
import CustomIcon from "@components/ui/custom-icon";
import Button from "@components/ui/button";
import Hyperlink from "@/components/ui/hyperlink";

export default function Page() {
  return (
    <div className="flex flex-col justify-between select-none pointer">
      <div>
        <div className="grid lg:grid-cols-[1fr,45vw]">
          <div className="relative hidden items-center justify-center lg:flex">
            <CustomIcon iconName="XIcon" className="h-[350px] w-[350px]" />
          </div>
          <div className="flex flex-col items-center justify-between gap-4 p-8 lg:items-start lg:justify-center">
            <div className="flex max-w-xs flex-col gap-4 lg:max-w-none lg:gap-8">
              <div className="lg:hidden">
                <CustomIcon iconName="XIcon" className="h-16 w-16" />
              </div>
              <div className="mt-12 mb-4">
                <h1 className="text-6xl leading-21 font-extrabold">
                  Happening now
                </h1>
              </div>
              <div className="mb-2">
                <h2 className="text-3xl leading-9 font-bold">Join today.</h2>
              </div>
            </div>
            <div className="flex max-w-xs flex-col gap-6">
              <div className="max-w-[400px] min-w-[200px] w-[300px] grid gap-3 font-bold">
                <SocialLoginButtons />
                <div className="grid w-full grid-cols-[1fr,auto,1fr] items-center gap-2">
                  <i className="border-b border-light-border dark:border-dark-border" />
                  <p className="font-normal">or</p>
                  <i className="border-b border-light-border dark:border-dark-border" />
                </div>
                <Link href="/signup">
                  <Button className="py-2 px-4 w-full bg-twitter-blue text-white transition focus:outline-transparent focus-visible:!ring-twitter-blue focus-visible:!ring-opacity-20">
                    Create Account
                  </Button>
                </Link>
                <p className="text-[12px] leading-4 font-normal text-[#536471] mb-5">
                  By signing up, you agree to the{" "}
                  <Hyperlink href="https://twitter.com/tos">
                    Terms of Service
                  </Hyperlink>{" "}
                  and{" "}
                  <Hyperlink href="https://twitter.com/privacy">
                    Privacy Policy
                  </Hyperlink>
                  , including{" "}
                  <Hyperlink href="https://help.twitter.com/rules-and-policies/twitter-cookies">
                    Cookie Use
                  </Hyperlink>
                  .
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-bold text-[17px] leading-5">
                  Already have an account?{" "}
                </p>
                <Link href="/signin">
                  <Button className="py-2 px-4 w-full border-[1px] font-bold text-twitter-blue hover:bg-twitter-blue/10 transition-colors duration-300">
                    Sign in
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-black text-opacity-60 justify-center p-4 text-sm lg:flex">
        <nav className="flex flex-wrap gap-3 gap-y-2 items-center justify-center text-[13px] ">
          {FooterLinks.map(([title, href]) => (
            <Hyperlink
              key={href}
              href={href}
              className="!text-black !text-opacity-60"
            >
              {title}
            </Hyperlink>
          ))}
          <p>© 2023 X Corp.</p>
        </nav>
      </footer>
    </div>
  );
}
