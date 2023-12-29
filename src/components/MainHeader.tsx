import cn from "clsx";

import type { ReactNode } from "react";

import ToolTip from "@components/ui/tooltip";
import Button from "@components/ui/button";
import HeroIcon from "@components/ui/hero-icon";

type Props = {
  tip?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
  disableSticky?: boolean;
  showActionButton?: boolean;
  onActionButtonClick?: () => void;
};

export default function MainHeader({
  tip,
  title,
  children,
  className,
  disableSticky = false,
  showActionButton,
  onActionButtonClick,
}: Props): JSX.Element {
  return (
    <header
      className={cn(className, "w-full z-100 border-b sticky top-0 bg-white")}
    >
      {showActionButton && (
        <Button className="group relative pr-8" onClick={onActionButtonClick}>
          <div className="p-2 rounded-full hover:bg-[#666666]/10">
            <HeroIcon className="h-5 w-5" iconName="ArrowLeftIcon" />
          </div>
          <ToolTip tip={tip ?? "Back"} />
        </Button>
      )}
      {title && (
        <div className="p-4">
          <h2 className="text-xl leading-6 font-bold" key={title}>
            {title}
          </h2>
        </div>
      )}
      {children}
    </header>
  );
}
