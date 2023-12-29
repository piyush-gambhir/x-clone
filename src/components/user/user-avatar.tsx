import Image from "next/image";
import Link from "next/link";
import cn from "clsx";

type UserAvatarProps = {
  src: string;
  alt: string;
  size?: number;
  username?: string;
  className?: string;
  openProfileOnClick?: boolean;
};

export default function UserAvatar({
  src,
  alt,
  size,
  username,
  className,
  openProfileOnClick,
}: UserAvatarProps): JSX.Element {
  const pictureSize = 40;

  return (
    <Link href={`/user/${username}`}>
      <div
        className={cn(
          "rounded-full overflow-hidden block w-full",
          !openProfileOnClick && "pointer-events-none",
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={pictureSize}
          height={pictureSize}
          className={`rounded-full w-[40px] h-[40px]`}
        />
      </div>
    </Link>
  );
}
