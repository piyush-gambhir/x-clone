import { forwardRef } from "react";
import cn from "clsx";

import type { ComponentPropsWithRef } from "react";

import Loading from "./loading";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  loading?: boolean;
  error?: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, loading, disabled, error, children, ...rest }, ref) => {
    const isDisabled = loading || disabled;
    return (
      <button
        className={cn(
          className,
          "rounded-full cursor-pointer",
          loading && "relative !text-transparent disabled:cursor-wait",
          disabled && "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        type="button"
        disabled={isDisabled}
        ref={ref}
        {...rest}
      >
        {loading && (
          <Loading
            iconClassName="h-5 w-5"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        )}
        {children}
      </button>
    );
  }
);

export default Button;
