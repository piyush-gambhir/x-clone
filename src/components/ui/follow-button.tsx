import Button from "@components/ui/button";

type Props = {
  userTargetId: string;
  userTargetUsername: string;
};

export default function FollowButton({
  userTargetId,
  userTargetUsername,
}: Props) {
  let isFollowing = false;
  const setIsFollowing = (value: boolean) => {
    isFollowing = value;
  };

  // if (user?.id === userTargetId) return null;

  // const { id: userId, following } = user ?? {};
  let userIsFollowed = true;
  const handleFollow = async (): Promise<void> => {
    // Placeholder logic; integrate with your backend as needed.
    console.log(`Following user with ID: ${userTargetId}`);
    // TODO: Implement follow logic
    userIsFollowed = !userIsFollowed;
  };

  const handleUnfollow = async (): Promise<void> => {
    // Placeholder logic; integrate with your backend as needed.
    console.log(`Unfollowing user with ID: ${userTargetId}`);
    // TODO: Implement unfollow logic
    userIsFollowed = !userIsFollowed;
  };

  // const userIsFollowed = !!following?.includes(userTargetId ?? "");

  return (
    <div>
      {isFollowing ? (
        <Button
          className='dark-bg-tab min-w-[106px] self-start border border-light-line-reply px-4 py-1.5 
                     font-bold hover:border-accent-red hover:bg-accent-red/10 hover:text-accent-red
                     hover:before:content-["Unfollow"] inner:hover:hidden dark:border-light-secondary'
          onClick={() => {
            setIsFollowing(false);
          }}
        >
          <span>Following</span>
        </Button>
      ) : (
        <Button
          className="bg-black rounded-full self-start px-4 py-1.5 font-bold text-white hover:bg-black/90 
                     focus-visible:bg-light-primary/90 active:bg-light-border/75 dark:bg-light-border 
                     dark:text-light-primary dark:hover:bg-light-border/90 dark:focus-visible:bg-light-border/90 
                     dark:active:bg-light-border/75"
          // onClick={preventBubbling(handleFollow)}
          onClick={() => {
            setIsFollowing(true);
          }}
        >
          Follow
        </Button>
      )}
    </div>
  );
}
