import Hyperlink from "@components/ui/hyperlink";

const footerLinks = [
  ["Terms of Service", "https://twitter.com/tos"],
  ["Privacy Policy", "https://twitter.com/privacy"],
  ["Cookie Policy", "https://support.twitter.com/articles/20170514"],
  ["Accessibility", "https://help.twitter.com/resources/accessibility"],
  [
    "Ads Info",
    "https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html",
  ],
];

export default function AsideFooter(): JSX.Element {
  return (
    <footer className="mb-16">
      <nav className="flex flex-wrap justify-center gap-2 text-[13px] leading-4 text-black/70">
        {footerLinks.map(([linkName, href]) => (
          <Hyperlink className="!text-black/70 pr-2" href={href} key={href}>
            {linkName}
          </Hyperlink>
        ))}
        <button className="">More</button>
        <p>© 2023 X Corp.</p>
      </nav>
    </footer>
  );
}
