import { useRouter } from "next/navigation";
import cn from "clsx";

import CustomIcon from "@components/ui/custom-icon";

type UserNameProps = {
  name: string;
  verified: boolean;
  username: string;
  className?: string;
  openProfileOnClick?: boolean;
};

export default function UserName({
  name,
  verified,
  username,
  className,
  openProfileOnClick,
}: UserNameProps): JSX.Element {
  const router = useRouter();
  return (
    <div
      className={cn("flex flex-row items-center truncate", className)}
      onClick={() => {
        if (openProfileOnClick) {
          router.push(`/${username}`);
        }
      }}
    >
      {name}
      {verified && (
        <CustomIcon
          className={cn("fill-twitter-blue h-5 w-5 ml-0.5 mt-1")}
          iconName="VerfiedBlueTickIcon"
        />
      )}
    </div>
  );
}
