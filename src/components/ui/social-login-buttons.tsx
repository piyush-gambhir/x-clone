import SocialLoginButton from "@components/ui/social-login-button";

export default function SocialLoginButtons() {
  return (
    <div className="w-full flex flex-col gap-3">
      <SocialLoginButton socialName="Google" disabled />
      {/* <SocialLoginButton socialName="Apple" disabled /> */}
      <SocialLoginButton socialName="GitHub" disabled />
    </div>
  );
}
