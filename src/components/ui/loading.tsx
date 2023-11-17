import cn from "clsx";

import CustomIcon from "./custom-icon";

type LoadingProps = {
  className?: string;
  iconClassName?: string;
};

export default function Loading({
  className,
  iconClassName,
}: LoadingProps): JSX.Element {
  return (
    <i className={cn("flex justify-center", className ?? "p-4")}>
      <CustomIcon
        className={cn("text-white", iconClassName ?? "h-7 w-7")}
        iconName="SpinnerIcon"
      />
    </i>
  );
}
