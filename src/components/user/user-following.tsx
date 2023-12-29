type UserFollowingProps = {
  userTargetId: string;
};

export default function UserFollowing({ userTargetId }: UserFollowingProps) {
  const isOwner = false;
  // user.id !== userTargetId && user.followers.includes(userTargetId);

  if (!isOwner) return null;

  return (
    <p className="rounded bg-main-search-background px-1 text-xs">
      Follows you
    </p>
  );
}
