"use client";
import { useState } from "react";
import Image from "next/image";
import cn from "clsx";

import type { ReactNode } from "react";
import type { ImageProps } from "next/image";

type NextImageProps = {
  alt: string;
  children?: ReactNode;
  useSkeleton?: boolean;
  imageClassName?: string;
  previewCount?: number;
  blurClassName?: string;
  isAvatar?: boolean;
} & ImageProps;

export default function NextImage({
  src,
  alt,
  children,
  className,
  useSkeleton,
  imageClassName,
  previewCount,
  blurClassName,
  isAvatar,
  ...rest
}: NextImageProps): JSX.Element {
  const [loading, setLoading] = useState(!!useSkeleton);

  const handleLoad = (): void => setLoading(false);

  return (
    <figure className={className}>
      <div
        className={cn(
          "relative",
          loading ? "animate-pulse bg-twitter-light-gray" : "",
          isAvatar ? "rounded-full" : "",
          !loading
            ? "transition-opacity ease-in duration-300 opacity-100"
            : "opacity-0"
        )}
      >
        <Image
          className={cn(
            "transition-opacity ease-in duration-300",
            loading ? "opacity-0" : "opacity-100",
            imageClassName,
            previewCount === 1 ? "h-full w-full object-contain" : "object-cover"
          )}
          src={src}
          alt={alt}
          onLoadingComplete={handleLoad}
          {...rest}
        />
      </div>
      {children}
    </figure>
  );
}
