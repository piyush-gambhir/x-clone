"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import cn from "clsx";
import getWindowSize from "@lib/utils/getWindowSize";
type ModalProps = {
  children: ReactNode;
  open: boolean;
  closeModal?: () => void;
  className?: string;
  modalClassName?: string;
  modalAnimation?: Variants;
  closePanelOnClick?: boolean;
};

const defaultVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 0.5, bounce: 0.4 },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } },
};

const variants: Variants[] = [
  {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 0.5, bounce: 0.4 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } },
  },
];

export const [backdrop, modal] = variants;

export default function Modal({
  children,
  open,
  closeModal,
  className,
  modalClassName,
  modalAnimation,
  closePanelOnClick,
}: ModalProps) {
  const deviceType = getWindowSize();

  return (
    <AnimatePresence>
      {open && (
        <div className="relative z-50">
          <motion.div
            className="hover-animation fixed inset-0 bg-black/40"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div
            className={cn(
              "fixed inset-0 break-word",
              className ?? "flex items-center justify-center"
            )}
          >
            <motion.div
              className={cn(
                "rounded-2xl, bg-white",
                deviceType === "MOBILE"
                  ? "h-full w-full rounded-none"
                  : "min-h-[400px] min-w-[600px] max-h-[90vh] max-w-[80vw] h-[650px]",
                modalClassName
              )}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={modalAnimation ?? defaultVariants}
              onClick={closePanelOnClick ? closeModal : undefined}
            >
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
