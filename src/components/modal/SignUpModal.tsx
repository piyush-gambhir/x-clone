"use client";
import axios from "axios";

import react, { useState, FC, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import cn from "clsx";
import { toast } from "react-hot-toast";

import { Modal } from "@/components/modal/modal";
import { Button, CustomIcon, HeroIcon, Hyperlink } from "@/components/UI";
import { InputField, DateInputField } from "@/components";

import { useWindowSize } from "@lib/context/windowSizeContext";

interface UserAuthFormProps extends react.HTMLAttributes<HTMLDivElement> {}
const SignUpModal: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const router = useRouter();

  const deviceType = useWindowSize();

  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [disableNextButton, setDisableNextButton] = useState(true);
  const [nameInputToggle, setNameInputToggle] = useState(false);
  const [emailInputToggle, setEmailInputToggle] = useState(false);
  const [passwordInputToggle, setPasswordInputToggle] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    dob: {
      year: "",
      month: "",
      day: "",
    },
    password: "",
  });
  const [fromErrors, setFormErrors] = useState({
    name: "",
    email: "",
    dob: {
      year: "",
      month: "",
      day: "",
    },
    password: "",
  });
  const [isCustomizeExperienceChecked, setIsCustomizeExperienceChecked] =
    useState(false);

  const emailRegex = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+.[a-zA-Z]+$"
  );

  const validateEmail = (email: string) => {
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length > 8;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dobLongForm = `${monthNames[Number(userDetails.dob.month) - 1]} ${
    userDetails.dob.day
  }, ${userDetails.dob.year}`;
  const dobISOFormat = `${userDetails.dob.year}-${userDetails.dob.month}-${userDetails.dob.day}`;
  useEffect(() => {
    if (step === 1) {
      let timer: NodeJS.Timeout;
      if (userDetails.name.length === 0 && nameInputToggle) {
        setFormErrors({
          ...fromErrors,
          name: "Name is required",
        });
      } else {
        setFormErrors({
          ...fromErrors,
          name: "",
        });
      }

      if (userDetails.name.length > 0) {
        setFormErrors({
          ...fromErrors,
          name: "",
        });
      }

      if (userDetails.email.length === 0) {
        setFormErrors({
          ...fromErrors,
          email: "",
        });
      }
      if (userDetails.email.length > 0) {
        timer = setTimeout(() => {
          const validEmail = validateEmail(userDetails.email);
          setFormErrors({
            ...fromErrors,
            email: validEmail ? "" : "Enter valid email",
          });
        }, 1000);
      }

      if (emailInputToggle && userDetails.email.length === 0) {
        setFormErrors({
          ...fromErrors,
          email: "Email is required",
        });
      }

      if (
        userDetails.name.length > 0 &&
        validateEmail(userDetails.email) &&
        userDetails.dob.day.length > 0 &&
        userDetails.dob.month.length > 0 &&
        userDetails.dob.year.length > 0
      ) {
        setDisableNextButton(false);
      } else {
        setDisableNextButton(true);
      }
      return () => {
        clearTimeout(timer);
      };
    } else if (step === 2) {
      if (isCustomizeExperienceChecked) {
        setDisableNextButton(false);
      } else {
        setDisableNextButton(true);
      }
    } else if (step === 5) {
      let timer: NodeJS.Timeout;
      if (userDetails.password.length > 0) {
        timer = setTimeout(() => {
          const validPassword = validatePassword(userDetails.password);
          setFormErrors({
            ...fromErrors,
            password: validPassword
              ? ""
              : "Your password needs to be at least 8 characters. Please enter a longer one.",
          });
        }, 1000);
      }

      if (passwordInputToggle && userDetails.password.length === 0) {
        setFormErrors({
          ...fromErrors,
          password: "Password is required",
        });
      }

      if (validatePassword(userDetails.password)) {
        setDisableNextButton(false);
      }

      return () => {
        clearTimeout(timer);
      };
    }
  }, [
    step,
    nameInputToggle,
    emailInputToggle,
    passwordInputToggle,
    userDetails,
    isCustomizeExperienceChecked,
  ]);

  const handleFieldClick = () => {
    if (step === 3) {
      setStep(1);
    }
  };

  const handleNextButtonClick = () => {
    if (step === 1) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(2);
      }, 1000);
    } else if (step === 2) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(3);
      }, 1000);
    } else if (step === 3) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(4);
      }, 1000);
    } else if (step === 4) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(5);
      }, 1000);
    } else if (step === 5) {
      setIsLoading(true);
      setTimeout(() => {
        createAccount();
      }, 1000);
    }
  };

  const createAccount = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/register", {
        name: userDetails.name,
        email: userDetails.email,
        password: userDetails.password,
        dob: dobISOFormat,
      });

      await signIn("credentials", {
        email: userDetails.email,
        password: userDetails.password,
      });
    } catch (error) {
      toast.error("Some error occured.");
    } finally {
      setIsLoading(false);
    }
  }, [userDetails, dobISOFormat, setIsLoading]);

  return (
    <Modal
      open={true}
      closeModal={() => router.push("/")}
      modalClassName={cn(
        "bg-white",
        deviceType === "MOBILE"
          ? "h-full w-full rounded-none"
          : "h-[650px] min-h-[400px] min-w-[600px] max-h-[90vh] max-w-[80vw]"
      )}
    >
      {isLoading ? (
        <div className="h-full flex flex-col justify-center items-center">
          <CustomIcon
            iconName="SpinnerIcon"
            className="h-6 w-6 animate-spin text-twitter-blue"
          />
        </div>
      ) : (
        <div className="h-full flex flex-col">
          <div className="relative flex flex-row">
            {step === 1 ? (
              <div
                className="absolute left-1 top-1 flex items-center p-2 rounded-full cursor-pointer hover:bg-twitter-extrs-light-gray transition-colors duration-300"
                onClick={() => router.push("/")}
              >
                <CustomIcon iconName="CloseIcon" className="h-6 w-6" />
              </div>
            ) : (
              <div
                className="absolute left-1 top-1 flex items-center p-2 rounded-full cursor-pointer hover:bg-twitter-extra-light-gray transition-colors duration-300"
                onClick={() => setStep(step - 1)}
              >
                <HeroIcon iconName="ArrowLeftIcon" className="h-6 w-6" />
              </div>
            )}

            <div className="py-4 ml-20 text-xl leading-6 font-bold">
              <span className="">Step {step} of 5</span>
            </div>
          </div>
          <div className="overflow-y-auto h-full">
            <div
              className={cn(
                "min-h-full flex flex-col justify-between ",
                deviceType === "MOBILE" ? "px-[30px]" : "px-[76px]"
              )}
            >
              {step === 1 && (
                <div className="flex flex-col">
                  <div className="my-5">
                    <h1 className="text-twitter-black text-[31px] leading-9 font-bold">
                      Create your account
                    </h1>
                  </div>
                  <div className="flex flex-col">
                    <div className="py-3">
                      <InputField
                        name="name"
                        placeholder="Name"
                        type="text"
                        error={fromErrors.name}
                        handleInputChange={(e) => {
                          setNameInputToggle(true);
                          setUserDetails({
                            ...userDetails,
                            name: e.target.value,
                          });
                        }}
                        showCharacterCount={true}
                        maxLength={50}
                        value={userDetails.name}
                      />
                    </div>
                    <div className="py-3">
                      <InputField
                        name="email"
                        placeholder="Email"
                        type="email"
                        error={fromErrors.email}
                        handleInputChange={(e) => {
                          setEmailInputToggle(true);
                          setUserDetails({
                            ...userDetails,
                            email: e.target.value,
                          });
                        }}
                        value={userDetails.email}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="text-twitter-blue hover:underline ">
                      Use phone instead
                    </Button>
                  </div>
                  <div className="mt-5">
                    <h3 className="mb-2 text-[15px] leading-5 font-bold">
                      Date of Birth
                    </h3>
                    <p className="mb-1 text-[14px] leading-4 font-normal text-twitter-dark-gray whitespace-normal max-w-md">
                      This will not be shown publicly. Confirm your own age,
                      even if this account is for a business, a pet, or
                      something else.
                    </p>
                  </div>
                  <div className="flex flex-row my-4">
                    <div className="mr-3 w-[50%]">
                      <DateInputField
                        name="month"
                        type="month"
                        label="Month"
                        handleInputChange={(e) => {
                          setUserDetails({
                            ...userDetails,
                            dob: { ...userDetails.dob, month: e.target.value },
                          });
                        }}
                        value={userDetails.dob.month}
                      />
                    </div>
                    <div className="mr-3 w-[20%]">
                      <DateInputField
                        name="day"
                        type="day"
                        label="Day"
                        handleInputChange={(e) => {
                          setUserDetails({
                            ...userDetails,
                            dob: { ...userDetails.dob, day: e.target.value },
                          });
                        }}
                        value={userDetails.dob.day}
                      />
                    </div>
                    <DateInputField
                      name="year"
                      type="year"
                      label="Year"
                      handleInputChange={(e) => {
                        setUserDetails({
                          ...userDetails,
                          dob: { ...userDetails.dob, year: e.target.value },
                        });
                      }}
                      className="w-[30%]"
                      value={userDetails.dob.year}
                    />
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="flex flex-col max-w-md">
                  <div className="mt-8 mb-4 flex">
                    <h1 className="text-[31px] leading-9 font-bold">
                      Customize your experience
                    </h1>
                  </div>
                  <div className="mt-8 mb-4 flex flex-col">
                    <span className="text-xl leading-6 font-bold">
                      Track where you see X content across the web
                    </span>
                    <div className="mt-3 flex flex-row justify-start">
                      <span className="text-[15px] leading-5 font-normal pr-3">
                        X uses this data to personalize your experience. This
                        web browsing history will never be stored with your
                        name, email, or phone number.
                      </span>
                      <div className="flex justify-start">
                        <div className="p-2 -m-2 ">
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded-lg border border-twitter-dark-gray checked:border-none focus:outline-none"
                            checked={isCustomizeExperienceChecked}
                            onChange={() =>
                              setIsCustomizeExperienceChecked(
                                !isCustomizeExperienceChecked
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <p className="text-[15px] leading-5 font-normal text-twitter-dark-gray">
                        By signing up, you agree to our
                        <Hyperlink href="/">Terms</Hyperlink>,{" "}
                        <Hyperlink href="/">Privacy Policy</Hyperlink>, and{" "}
                        <Hyperlink href="/">Cookie Use</Hyperlink>. X may use
                        your contact information, including your email address
                        and phone number for purposes outlined in our Privacy
                        Policy.
                        <Hyperlink href="/">Learn more</Hyperlink>
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className=" flex flex-col justify-between max-w-md">
                  <div className="mt-8 mb-4 flex">
                    <h1 className="text-[31px] leading-9 font-bold">
                      Create your account
                    </h1>
                  </div>
                  <div className="flex flex-col">
                    <div onClick={handleFieldClick} className="py-3">
                      <InputField
                        name="nameReadOnly"
                        placeholder="Name"
                        type="text"
                        value={userDetails.name}
                        readOnly={true}
                      />
                    </div>
                    <div onClick={handleFieldClick} className="py-3">
                      <InputField
                        name="emailReadOnly"
                        placeholder="Email"
                        type="email"
                        value={userDetails.email}
                        readOnly={true}
                      />
                    </div>
                    <div onClick={handleFieldClick} className="py-3">
                      <InputField
                        name="dobReadOnly"
                        placeholder="Date of Birth"
                        type="text"
                        value={dobLongForm}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-[13px] leading-4 font-normal text-twitter-dark-gray">
                      By signing up, you agree to the{" "}
                      <Hyperlink href="">Terms of Service</Hyperlink> and
                      <Hyperlink href="">Privacy Policy</Hyperlink>, including{" "}
                      <Hyperlink href="">Cookie Use</Hyperlink>. Twitter may use
                      your contact information, including your email address and
                      phone number for purposes outlined in our Privacy Policy,
                      like keeping your account secure and personalizing our
                      services, including ads.{" "}
                      <Hyperlink href="">Learn more</Hyperlink>. Others will be
                      able to find you by email or phone number, when provided,
                      unless you choose otherwise{" "}
                      <Hyperlink href="">here</Hyperlink>.
                    </p>
                  </div>
                </div>
              )}
              {step === 4 && (
                <div className=" flex flex-col justify-between max-w-md"></div>
              )}
              {step === 5 && (
                <div className=" flex flex-col max-w-md">
                  <div className="my-5 flex flex-col">
                    <h1 className="text-[31px] leading-9 font-bold">
                      You&apos;ll need a password
                    </h1>
                    <div className="mt-2">
                      <span className="text-twitter-dark-gray text-[15px] leading-5 font-normal">
                        Make sure it&apos;s 8 characters or more.
                      </span>
                    </div>
                  </div>
                  <div className="py-3">
                    <InputField
                      name="password"
                      type="password"
                      isPassword={true}
                      placeholder="Password"
                      value={userDetails.password}
                      error={fromErrors.password}
                      handleInputChange={(e) => {
                        setPasswordInputToggle(true);
                        setUserDetails({
                          ...userDetails,
                          password: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              )}
              <div className="my-6 flex flex-col gap-4">
                <Button
                  className="p-4 w-full bg-twitter-black text-white font-semibold hover:bg-opacity-90 transition-colors duration-300"
                  onClick={handleNextButtonClick}
                  disabled={disableNextButton}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default SignUpModal;
