import Link from "next/link";

import UserName from "@components/user/user-name";
import UserUsername from "@components/user/user-username";
import UserAvatar from "@components/user/user-avatar";
import FollowButton from "@components/ui/follow-button";
import UserTooltip from "@components/user/user-tooltip";
import UserFollowing from "@components/user/user-following";

import type { User } from "@lib/types/user";

type UserCardProps = User & {
  modal?: boolean;
  follow?: boolean;
};

export default function UserCard(user: UserCardProps): JSX.Element {
  const { id, bio, name, modal, follow, username, verified, photoUrl } = user;

  return (
    <Link href={`/user/${username}`}>
      <div className="grid grid-cols-[auto,1fr] gap-3 px-4 py-3 hover:bg-light-primary/5 dark:hover:bg-dark-primary/5">
        <UserTooltip avatar {...user} modal={modal}>
          <UserAvatar src={photoUrl} alt={name} username={username} />
        </UserTooltip>
        <div className="flex flex-col gap-1 truncate xs:overflow-visible">
          <div className="flex items-center justify-between gap-2 truncate xs:overflow-visible">
            <div className="flex flex-col justify-center truncate xs:overflow-visible xs:whitespace-normal">
              <UserTooltip {...user} modal={modal}>
                <UserName
                  className="-mb-1"
                  name={name}
                  username={username}
                  verified={verified ?? false}
                />
              </UserTooltip>
              <div className="flex items-center gap-1 text-light-secondary dark:text-dark-secondary">
                <UserTooltip {...user} modal={modal}>
                  <UserUsername username={username} />
                </UserTooltip>
                {follow && <UserFollowing userTargetId={id} />}
              </div>
            </div>
            <FollowButton userTargetId={id} userTargetUsername={username} />
          </div>
          {follow && bio && <p className="whitespace-normal">{bio}</p>}
        </div>
      </div>
    </Link>
  );
}
