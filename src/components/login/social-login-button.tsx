import Button from "@components/ui/button";
import CustomIcon from "@components/ui/custom-icon";

type SocialSignInButtonProps = {
  socialName: string;
  type?: "signin" | "signup";
  disabled?: boolean;
};

export default function SocialSignInButton({
  socialName,
  disabled = false,
  type = "signin",
}: SocialSignInButtonProps) {
  return (
    <Button
      className="w-full h-10 flex flex-row justify-center items-center gap-2 border-[1px] border-[#CFD9DE] font-bold text-[15px] leading-5 break-words transition-colors hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6]"
      disabled={disabled}
    >
      <CustomIcon iconName={`${socialName}Icon`} className="h-5 w-5 mr-1" />
      <span>{`Sign ${
        type === "signin" ? "in" : "up"
      } with ${socialName}`}</span>
    </Button>
  );
}
