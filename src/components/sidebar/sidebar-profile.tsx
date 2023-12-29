"use client";
import { signOut } from "next-auth/react";
import { useModal } from "@lib/hooks";

import MenuModal from "@/components/modal/menu-modal";
import { CustomIcon } from "@/components/UI";
import { UserName, UserUsername, UserAvatar } from "@components/User";

type SidebarProfileProps = {
  name: string;
  username: string;
  photoUrl: string;
  verified: boolean;
};

export default function SidebarProfile({
  name,
  username,
  photoUrl,
  verified,
}: SidebarProfileProps) {
  const { open, openModal, closeModal } = useModal();

  return (
    <div className="relative">
      <button
        className="w-full flex flex-row justify-between items-center p-3 rounded-full hover:bg-[#e7e7e8] cursor-pointer"
        onClick={() => {
          openModal();
        }}
      >
        <div className="flex flex-row items-center">
          <UserAvatar
            src={photoUrl}
            alt={name ?? "User"}
            size={40}
            username={username}
            className="rounded-full"
          />
          <div className="hidden xl:flex flex-col mx-3">
            <UserName
              name={name}
              verified={verified}
              username={username}
              className="font-bold text-[15px]"
            />
            <UserUsername username={username} className="text-[15px]" />
          </div>
        </div>

        <CustomIcon
          className="h-5 w-5 hidden lg:block"
          iconName="ThreeDotsHorizontalIcon"
        />
      </button>
      <MenuModal isOpen={open} closeModal={closeModal}>
        <button
          className="transition-colors flex items-center px-4 py-3 hover:bg-[#e7e7e8]"
          onClick={closeModal}
        >
          Add an existing account
        </button>
        <button
          className="transition-colors flex items-center px-4 py-3 hover:bg-[#e7e7e8]"
          onClick={() => signOut()}
        >
          {`Log out @${username}`}
        </button>
        <i
          className="absolute -bottom-[10px] left-2 translate-x-1/2 rotate-180
                         [filter:drop-shadow(#cfd9de_1px_-1px_1px)] 
                         dark:[filter:drop-shadow(#333639_1px_-1px_1px)]
                         xl:left-1/2 xl:-translate-x-1/2"
        >
          <CustomIcon className="h-4 w-6 fill-white" iconName="TriangleIcon" />
        </i>
      </MenuModal>
    </div>
  );
}
