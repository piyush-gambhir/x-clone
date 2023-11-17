import { AnimatePresence, motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import cn from "clsx";

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

export default function Modal({
  children,
  open,
  closeModal,
  className,
  modalClassName,
  modalAnimation,
  closePanelOnClick,
}: ModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="relative z-50 ">
          <motion.div
            className="hidden md:block md:fixed md:inset-0 md:bg-black md:bg-opacity-40"
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
                "rounded-2xl bg-white",
                "h-full w-full md:w-auto md:min-h-[400px] md:min-w-[600px] md:max-h-[90vh] md:max-w-[80vw] md:rounded-2xl ",
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
