"use client";

import { Button } from "@/components/UI";
import { Modal, ImageModal } from "@/components/modal/modal";

import { useModal } from "@lib/hooks";
import type { ImageData } from "@lib/types/file";

type UserHomeCoverProps = {
  coverData?: ImageData | null;
};

export default function UserHomeCover({
  coverData,
}: UserHomeCoverProps): JSX.Element {
  const { open, openModal, closeModal } = useModal();

  return (
    <div className="block w-full pb-[33.3%] bg-twitter-extra-light-gray ">
      <Modal open={open} closeModal={closeModal}>
        <ImageModal imageData={coverData as ImageData} previewCount={1} />
      </Modal>
      {coverData ? (
        <Button className="outline-none" onClick={openModal}>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${coverData.src})`,
              backgroundSize: "cover",
            }}
          ></div>
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
}
