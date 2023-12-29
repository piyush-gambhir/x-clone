import Link from "next/link";
import cn from "clsx";

import FollowButton from "@components/ui/follow-button";
import NextImage from "@components/ui/next-image";
import UserAvatar from "@components/user/user-avatar";
import UserName from "@components/user/user-name";
import UserFollowing from "@components/user/user-following";
import UserUsername from "@components/user/user-username";

import type { ReactNode } from "react";

type Props = Pick<
  User,
  | "id"
  | "bio"
  | "name"
  | "verified"
  | "username"
  | "photoUrl"
  | "following"
  | "followers"
  | "coverPhotoUrl"
> & {
  modal?: boolean;
  avatar?: boolean;
  children: ReactNode;
};

type Stats = [string, string, number];
export default function UserTooltip({
  id,
  bio,
  name,
  modal,
  avatar,
  verified,
  children,
  photoUrl,
  username,
  following,
  followers,
  coverPhotoUrl,
}: Props) {
  const userLink = `/user/${username}`;

  // Ensure that following and followers are arrays, if not, default to an empty array
  const safeFollowing = Array.isArray(following) ? following : [];
  const safeFollowers = Array.isArray(followers) ? followers : [];

  const allStats: Readonly<Stats[]> = [
    ["following", "Following", safeFollowing.length],
    ["followers", "Followers", safeFollowers.length],
  ];

  return (
    <div
      className={cn(
        "group relative self-start text-light-primary dark:text-dark-primary",
        avatar ? "[&>div]:translate-y-2" : "grid [&>div]:translate-y-7"
      )}
    >
      {children}
      <div
        className="bg-white invisible absolute left-1/2 w-72 -translate-x-1/2 rounded-2xl 
                   opacity-0 [transition:visibility_0ms_ease_400ms,opacity_200ms_ease_200ms] group-hover:visible 
                   group-hover:opacity-100 group-hover:delay-500 shadow-xl z-50"
      >
        <div className="flex flex-col gap-2 p-4">
          <div className="flex flex-row justify-between">
            <UserAvatar
              className="hover:brightness-100 [&>figure>span]:[transition:200ms]
[&:hover>figure>span]:brightness-75"
              src={photoUrl}
              alt={name}
              size={64}
              username={username}
            />
            <FollowButton userTargetId={id} userTargetUsername={username} />
          </div>
          <div>
            <UserName
              className="-mb-1 text-lg"
              name={name}
              username={username}
              verified={verified ?? false}
            />
            <div className="flex items-center gap-1 text-light-secondary dark:text-dark-secondary">
              <UserUsername username={username} />
              <UserFollowing userTargetId={id} />
            </div>
          </div>
          {bio && (
            <p className="text-[15px] leading-5 font-normal mb-1">{bio}</p>
          )}
          <div className="text-secondary flex gap-4">
            {allStats.map(([id, label, stat]) => (
              <Link href={`${userLink}/${id}`} key={id}>
                <div
                  className="hover-animation flex h-4 items-center gap-1 border-b border-b-transparent 
                             outline-none hover:border-b-light-primary focus-visible:border-b-light-primary
                             dark:hover:border-b-dark-primary dark:focus-visible:border-b-dark-primary"
                >
                  <p className="font-bold">{stat}</p>
                  <p className="text-light-secondary dark:text-dark-secondary">
                    {label}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
