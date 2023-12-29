import cn from "clsx";

type UserUsernameProps = {
  username: string;
  className?: string;
  onClick?: () => void;
};

export default function UserUsername({
  username,
  className,
  onClick,
}: UserUsernameProps): JSX.Element {
  return (
    <div
      className={cn(
        className,
        "truncate text-twitter-dark-gray flex justify-start"
      )}
      onClick={onClick}
    >
      {`@${username}`}
    </div>
  );
}
