// import { useRef, useEffect } from "react";
// import cn from "clsx";

// import { Modal } from ".";
// import { CustomIcon, Button } from "@/components/UI";

// type ActionModalProps = {
//   title: string;
//   useXIcon?: boolean;
//   description: string;
//   focusOnMainBtn?: boolean;
//   mainBtnLabel: string;
//   mainBtnClassName?: string;
//   secondaryBtnLabel?: string;
//   secondaryBtnClassName?: string;
//   action: () => void;
//   closeModal: () => void;
// };

// export default function ActionModal({
//   title,
//   useXIcon,
//   description,
//   mainBtnLabel,
//   focusOnMainBtn,
//   mainBtnClassName,
//   secondaryBtnLabel,
//   secondaryBtnClassName,
//   action,
//   closeModal,
// }: ActionModalProps): JSX.Element {
//   const mainBtn = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     if (!focusOnMainBtn) return;
//     const timeoutId = setTimeout(() => mainBtn.current?.focus(), 50);
//     return () => clearTimeout(timeoutId);
//   }, [focusOnMainBtn]);

//   return (
//     <Modal
//       open={true}
//       closeModal={() => {}}
//       modalClassName="max-w-[600px] w-[320px] bg-white rounded-lg shadow-lg p-8"
//     >
//       <div className="flex flex-col">
//         <div className="flex flex-col">
//           {useXIcon && (
//             <i className="flex mb-4 justify-center">
//               <CustomIcon iconName="XIcon" className="h-9 w-9" />
//             </i>
//           )}
//           <div className="flex flex-col">
//             <h2 className="text-twitter-black text-xl font-bold mb-2">
//               {title}
//             </h2>
//             <p className="text-[#536471] font-normal leading-5 text-[15px]">
//               {description}
//             </p>
//           </div>
//         </div>
//         <div className="mt-6 flex flex-col gap-3">
//           <Button
//             className={cn("w-full p-3 bg-twitter-black", mainBtnClassName)}
//             ref={mainBtn}
//             onClick={action}
//           >
//             <span className="text-white font-bold text-[15px] ">
//               {mainBtnLabel}
//             </span>
//           </Button>
//           <Button
//             className={cn("w-full p-3 border", secondaryBtnClassName)}
//             onClick={closeModal}
//           >
//             <span className="text-black font-bold text-[15px] ">
//               {secondaryBtnLabel ?? "Cancel"}
//             </span>
//           </Button>
//         </div>
//       </div>
//     </Modal>
//   );
// }
