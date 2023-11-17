import Link from "next/link";

export default function LoginFooter() {
  const footerLinks = [
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
  return (
    <footer className="text-black text-opacity-60 justify-center p-4 text-sm lg:flex">
      <nav className="flex flex-wrap gap-3 gap-y-2 items-center justify-center text-[13px] ">
        {footerLinks.map(([linkName, href]) => (
          <Link href={href} key={linkName} className="hover:underline">
            {linkName}
          </Link>
        ))}
        <p>© 2023 X Corp.</p>
      </nav>
    </footer>
  );
}
