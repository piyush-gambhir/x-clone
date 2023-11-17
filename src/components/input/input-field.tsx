import React, { useState } from "react";
import cn from "clsx";

type InputFieldProps = {
  name: string;
  placeholder?: string;
  label?: string;
  isPassword?: boolean;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  type?: string;
  error?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
  readOnly?: boolean;
};

export default function InputField({
  name,
  placeholder,
  isPassword,
  label,
  disabled,
  value = "",
  type,
  error,
  showCharacterCount,
  maxLength,
  readOnly,
  handleInputChange,
}: InputFieldProps): JSX.Element {
  const [isFocused, setFocused] = useState(false);
  const [hasContent, setHasContent] = useState(false || value.length > 0);
  const [characterCount, setCharacterCount] = useState(0);
  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setHasContent(true);
    } else {
      setHasContent(false);
    }
    setCharacterCount(e.target.value.length);
    if (handleInputChange) {
      handleInputChange(e);
    }
  };

  return (
    <div className="relative">
      <div
        className={cn(
          "relative px-2 w-full bg-transparent rounded-[4px] border-[2px] focus-within:border-twitter-blue transition-all duration-100 ",
          error?.length &&
            "border-twitter-error-red focus-within:border-twitter-error-red",
          disabled &&
            "border-transparent text-twitter-light-gray bg-twitter-extra-extra-light-gray cursor-not-allowed"
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <form className="pt-3 pb-2 mt-4">
          <label
            className={cn("absolute transition-all duration-100 ", {
              "text-xs top-2 text-twitter-error-red":
                error?.length && (isFocused || hasContent),
              "text-xs top-2 text-twitter-blue": isFocused || hasContent,
              "text-lg top-4 text-twitter-dark-gray": !isFocused && !hasContent,
              "text-twitter-light-gray": !isFocused && hasContent,
            })}
            htmlFor={name}
          >
            {placeholder ?? label}
          </label>
          <input
            className="w-full focus:outline-none bg-transparent leading-6 text-[17px] font-normal resize-none"
            type={type}
            name={name}
            onChange={handleChange}
            autoComplete="off"
            disabled={disabled}
            value={value}
            maxLength={maxLength}
            readOnly={readOnly}
          />
        </form>
        {showCharacterCount && isFocused && (
          <div className="absolute top-2 right-2 text-sm text-twitter-light-gray">
            {characterCount}/{maxLength}
          </div>
        )}
      </div>
      {error && (
        <span className="absolute -bottom-5 left-2 text-sm text-twitter-error-red">
          {error}
        </span>
      )}
    </div>
  );
}
