"use client";

import Image from "next/image";

import { Modal, ImageModal } from "@/components/modal/modal";

import { useModal } from "@lib/hooks";

import type { ImageData } from "@lib/types/file";

type UserHomeAvatarProps = {
  profilePhotoData?: ImageData | null;
};

export default function UserHomeAvatar({
  profilePhotoData,
}: UserHomeAvatarProps): JSX.Element {
  const { open, openModal, closeModal } = useModal();

  return (
    <div>
      <Modal open={open} closeModal={closeModal}>
        <ImageModal
          imageData={
            {
              src: profilePhotoData?.src,
              alt: profilePhotoData?.alt,
            } as ImageData
          }
          previewCount={1}
        />
      </Modal>
      <div
        className="rounded-full border-[4px] border-white cursor-pointer"
        onClick={openModal}
      >
        <Image
          src={profilePhotoData.src}
          alt={profilePhotoData.alt}
          width={145}
          height={145}
          className="rounded-full h-[145px] w-[145px]"
        />
      </div>
    </div>
  );
}
