import cn from "clsx";

import Button from "@components/ui/button";
import CustomIcon from "@components/ui/custom-icon";

export type Props = {
  buttonName: string;
  iconName: string;
  disabled?: boolean;
  onClick?: () => void;
  active?: boolean;
};

export default function SidebarButton({
  buttonName,
  iconName,
  onClick,
  disabled = false,
  active = false,
}: Props) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "group outline-none flex rounded-full transition duration-200",
        disabled && "cursor-not-allowed"
      )}
    >
      <div className="flex flex-row p-3 items-center self-start text-xl rounded-full group-hover:bg-[#e7e7e8] transition-colors duration-300">
        <CustomIcon className="h-6 w-6" iconName={iconName} />
        <p className="hidden xl:block ml-5 mr-4">{buttonName}</p>
      </div>
    </Button>
  );
}
