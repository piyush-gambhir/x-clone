"use client";

import Link from "next/link";
import cn from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useFormState, useFormStatus } from "react-dom";

import authenticate from "@lib/auth";

import SocialLoginButtons from "@components/login/social-login-buttons";
import Modal from "@components/modal/modal";
import Button from "@components/ui/button";
import CustomIcon from "@components/ui/custom-icon";
import InputField from "@components/input/input-field";

const CredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const FormErrorsSchema = z.record(z.string());

export default function SignInModal() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const [formErrors, setFormErrors] = useState(FormErrorsSchema.parse({}));

  const handleNextButtonClick = () => {
    const emailValidation = CredentialsSchema.pick({ email: true }).safeParse({
      email: credentials.email,
    });

    if (!emailValidation.success) {
      setFormErrors({
        ...formErrors,
        email: "Invalid email address",
      });
      return;
    }

    setStep(2);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    await authenticate(credentials);
    setIsLoading(false);
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
        <div className="w-full h-full flex flex-col">
          <div className="relative justify-center flex flex-row py-2">
            <div
              className="absolute left-2 top-1 flex items-center p-2 rounded-full cursor-pointer hover:bg-twitter-extra-light-gray transition-colors duration-300"
              onClick={() => router.push("/")}
            >
              <CustomIcon iconName="CloseIcon" className="h-6 w-6" />
            </div>
            <div className="flex justify-center py-2">
              <CustomIcon iconName="XIcon" className="h-8 w-8" />
            </div>
          </div>
          {step === 1 && (
            <div className="w-full overflow-y-auto">
              <div className="max-w-[364px] mx-auto px-8 pb-12">
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
                      setCredentials({
                        ...credentials,
                        email: e.target.value,
                      });
                    }}
                    value={credentials.email}
                    error={formErrors.email}
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
            </div>
          )}
          {step === 2 && (
            <div className="h-full flex flex-col justify-between overflow-y-auto">
              <div className="flex flex-col px-8 md:px-20">
                <div className="my-5">
                  <h1
                    className={cn(
                      " text-twitter-black font-bold text-[26px] leading-8 md:text-[31px] md:leading-9"
                    )}
                  >
                    Enter your password
                  </h1>
                </div>

                <div className="py-3">
                  <InputField
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    disabled={true}
                  />
                </div>
                <div className="flex flex-col py-3">
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
                    href="/flow/password_reset"
                  >
                    <span className="text-[13px] leading-4 font-normal">
                      Forgot Password?
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col px-8 md:px-20">
                <Button
                  className="my-4 p-4 w-full bg-twitter-black text-white font-semibold hover:bg-opacity-90 transition-colors duration-300"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <div className="mb-6">
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
}
