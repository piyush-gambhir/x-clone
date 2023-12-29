"use client";

import react, { useState, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import cn from "clsx";

import { SocialLoginButtons } from "../Login";
import { Modal } from "@/components/modal/modal";
import { Button, CustomIcon } from "@/components/UI";
import { InputField } from "@/components";

import { useWindowSize } from "@lib/context/windowSizeContext";

interface UserAuthFormProps extends react.HTMLAttributes<HTMLDivElement> {}
const SignInModal: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const deviceType = useWindowSize();

  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [emailInputToggle, setEmailInputToggle] = useState(false);
  
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  
  const emailRegex = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+.[a-zA-Z]+$"
  );

  const handleNextButtonClick = () => {
    if (!emailRegex.test(credentials.email)) {
      return;
    }
    setStep(2);
  };

  const handleLogin = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        redirect: false,
        ...credentials,
      });

      if (result.error) {
        setFormErrors({ ...formErrors, ...result.error });
      } else {
        router.push("/home");
      }
    } catch (error) {
      // Handle exception, set an error state, or display a message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal open={true} closeModal={() => router.push("/")}>
      {isLoading ? (
        <div className="h-full flex flex-col justify-center items-center">
          <CustomIcon
            iconName="SpinnerIcon"
            className="h-6 w-6 animate-spin text-twitter-blue"
          />
        </div>
      ) : (
        <div className="h-full flex flex-col">
          <div className="relative justify-center flex flex-row">
            <div
              className="absolute left-1 top-1 flex items-center p-2 rounded-full cursor-pointer hover:bg-twitter-extra-light-gray transition-colors duration-300"
              onClick={() => router.push("/")}
            >
              <CustomIcon iconName="CloseIcon" className="h-6 w-6" />
            </div>
            <div className="flex justify-center py-2">
              <CustomIcon iconName="XIcon" className="h-8 w-8" />
            </div>
          </div>
          {step === 1 && (
            <div
              className={cn(
                " flex flex-col px-8 pb-12",
                deviceType === "MOBILE" ? "my-auto" : "mx-[100px]"
              )}
            >
              <div className="my-5 flex">
                <h1 className="text-twitter-black text-[31px] leading-9 font-bold">
                  Sign in to X
                </h1>
              </div>
              <div className="my-4">
                <SocialLoginButtons />
              </div>
              <div className="grid w-full grid-cols-[1fr,auto,1fr] items-center gap-2">
                <i className="border-b border-light-border dark:border-dark-border" />
                <p className="font-normal">or</p>
                <i className="border-b border-light-border dark:border-dark-border" />
              </div>
              <div className="py-3">
                <InputField
                  name="email"
                  placeholder="Email"
                  type="email"
                  handleInputChange={(e) => {
                    setCredentials({ ...credentials, email: e.target.value });
                  }}
                  value={credentials.email}
                />
              </div>
              <div className="my-4 flex flex-col gap-4">
                <Button
                  className=" py-2 px-4 w-full bg-twitter-black text-white font-semibold hover:bg-opacity-90 transition-colors duration-300"
                  onClick={handleNextButtonClick}
                >
                  Next
                </Button>
                <Button
                  className="py-2 px-4 w-full border font-semibold hover:bg-twitter-extra-light-gray transition-colors duration-300"
                  onClick={() => router.push("/login/password_reset")}
                >
                  Forgot Password?
                </Button>
              </div>
              <div className="my-6">
                <p className="text-[15px] leading-5">
                  Do not have account?{" "}
                  <Link
                    href="/login/signup"
                    className="hover:underline text-twitter-blue"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          )}
          {step === 2 && (
            <div
              className={cn(
                " h-full flex flex-col",
                deviceType === "MOBILE" ? "px-8" : "px-20"
              )}
            >
              <div className="flex flex-col">
                <div className="my-5">
                  <h1
                    className={cn(
                      " text-twitter-black font-bold",
                      deviceType === "MOBILE"
                        ? "text-[26px] leading-8"
                        : "text-[31px] leading-9"
                    )}
                  >
                    Enter your password
                  </h1>
                </div>
                <div className="flex flex-col gap-3">
                  <InputField
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    disabled={true}
                  />
                  <div className="flex flex-col">
                    <InputField
                      name="password"
                      placeholder="Password"
                      type="password"
                      isPassword={true}
                      handleInputChange={(e) => {
                        setCredentials({
                          ...credentials,
                          password: e.target.value,
                        });
                      }}
                      value={credentials.password}
                    />
                    <Link
                      className="hover:underline text-twitter-blue pl-3"
                      href="/login/password_reset"
                    >
                      <span className="text-[13px] leading-4 font-normal">
                        Forgot Password?
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-grow"></div>
              <div className="flex flex-col">
                <Button
                  className="p-4 w-full bg-twitter-black text-white font-semibold hover:bg-opacity-90 transition-colors duration-300"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <div className="my-10">
                  <p className="text-[15px] leading-5">
                    Do not have account?{" "}
                    <Link
                      href="/login/signup"
                      className="hover:underline text-twitter-blue"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default SignInModal;
