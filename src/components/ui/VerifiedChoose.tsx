"use client";

import React from "react";

import { Modal } from "@/components/modal/modal";

import { useWindowSize } from "@lib/context/windowSizeContext";
export default function VerifiedChoose() {
  const deviceType = useWindowSize();
  return (
    <Modal
      open={true}
      closeModal={() => router.push("/")}
      modalClassName={cn(
        "bg-white",
        deviceType === "MOBILE"
          ? "h-full w-full rounded-none"
          : "min-h-[400px] min-w-[600px] max-h-[90vh] max-w-[80vw] h-[650px]"
      )}
    ></Modal>
  );
}
