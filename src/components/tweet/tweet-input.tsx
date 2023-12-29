"use client";
import React, { useRef, useEffect } from "react";

type TweetInputProps = {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
};

export default function TweetInput({
  placeholder,
  className,
  value,
  disabled,
  onChange,
}: TweetInputProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const textArea = textAreaRef.current;
    textArea.style.height = "auto";
    textArea.style.height = Math.min(textArea.scrollHeight, 720) + "px";
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textArea = e.target;
    textArea.style.height = "auto";
    textArea.style.height = Math.min(textArea.scrollHeight, 720) + "px";
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="w-full">
      <textarea
        ref={textAreaRef}
        placeholder={placeholder ?? "What is happening?!"}
        className="resize-none max-h-[720px] w-full bg-transparent px-1 py-0.5 text-xl leading-6 font-normal appearance-none focus:outline-none placeholder:text-twitter-dark-gray"
        rows={1}
        onChange={handleInputChange}
        disabled={disabled}
      />
    </div>
  );
}
