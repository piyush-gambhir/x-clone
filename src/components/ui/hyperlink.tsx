import Link, { LinkProps } from "next/link";
import cn from "clsx";

type Props = {
  href: string;
  className?: string;
  linkProps?: LinkProps;
  children: React.ReactNode;
};
export default function Hyperlink({
  href,
  className,
  linkProps,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className={cn("text-twitter-blue hover:underline", className)}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
