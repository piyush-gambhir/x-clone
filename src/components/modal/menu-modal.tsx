"use client";
import { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { Variants } from "framer-motion";

export const variants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.4 },
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.2 } },
};

type ModalMenuProps = {
  isOpen: boolean;
  closeModal: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function ModalMenu({
  isOpen,
  closeModal,
  className,
  children,
}: ModalMenuProps) {
  if (!isOpen) {
    return null;
  }
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={className}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-[300px] flex flex-col py-3 shadow-2xl bg-white absolute left-0 transform -translate-x-1/2 mb-2 bottom-full z-50 mt-2 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
