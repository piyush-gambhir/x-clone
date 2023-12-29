import cn from "clsx";
import React, { ChangeEvent, useState, useRef } from "react";

import { HeroIcon } from "@/components/UI";

type InputFieldProps = {
  name: string;
  showPlaceholder?: boolean;
  label: string;
  handleInputChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  disabled?: boolean;
  type: "year" | "month" | "day";
  className?: string;
};

export default function InputField({
  name,
  showPlaceholder = false,
  label,
  disabled = false,
  type,
  handleInputChange,
  className,
}: InputFieldProps): JSX.Element {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (handleInputChange) {
      handleInputChange(e);
    }
  };

  const options = {
    year: Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i),
    month: [
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
    ],
    day: Array.from({ length: 31 }, (_, i) => i + 1),
  };

  const [isFocused, setIsFocused] = useState(false);
  const selectRef = useRef(null);

  const handleClick = () => {
    selectRef.current && selectRef.current.click();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={cn(
        className,
        "relative pl-2 pr-1 bg-transparent rounded-[4px] border-[2px] transition-all duration-100",
        disabled &&
          "border-none text-twitter-light-gray bg-twitter-extra-extra-light-gray cursor-not-allowed",
        isFocused ? "border-twitter-blue" : ""
      )}
      onClick={handleClick}
    >
      <div className="pt-3 pb-2 mt-4">
        <label
          className={cn(
            "absolute left-2 transition-all duration-100 text-xs top-2",
            isFocused ? "text-twitter-blue" : "text-twitter-dark-gray"
          )}
          htmlFor={name}
        >
          {label}
        </label>
        <select
          ref={selectRef}
          name={name}
          id={name}
          onChange={handleChange}
          className="focus:outline-none pr-8 bg-transparent leading-6 text-[17px] font-normal resize-none appearance-none w-full"
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {showPlaceholder ? (
            <option value="">Select {label}</option>
          ) : (
            <option value=""></option>
          )}
          {options[type].slice(showPlaceholder ? 1 : 0).map((item, index) => (
            <option key={index} value={type === "month" ? index + 1 : item}>
              {item}
            </option>
          ))}
        </select>

        <HeroIcon
          iconName="ChevronDownIcon"
          className={cn(
            "h-6 w-6 absolute top-5 right-2",
            isFocused ? "text-twitter-blue" : "text-twitter-dark-gray"
          )}
        />
      </div>
    </div>
  );
}
