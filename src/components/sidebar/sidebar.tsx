const SidebarLinks = {
  home: {
    href: "/home",
    linkName: "Home",
    iconName: "HomeIcon",
    disabled: false,
  },
  explore: {
    href: "/comingsoon",
    linkName: "Explore",
    iconName: "ExploreIcon",
    disabled: false,
  },
  notifications: {
    href: "/comingsoon",
    linkName: "Notifications",
    iconName: "NotificationIcon",
    disabled: false,
  },
  messages: {
    href: "/comingsoon",
    linkName: "Messages",
    iconName: "MessageIcon",
    disabled: false,
  },
  lists: {
    href: "/comingsoon",
    linkName: "Lists",
    iconName: "ListIcon",
    disabled: false,
  },
  communities: {
    href: "/comingsoon",
    linkName: "Communities",
    iconName: "CommunitiesIcon",
    disabled: false,
  },
  verified: {
    href: "/comingsoon",
    linkName: "Verified",
    iconName: "XIcon",
    disabled: false,
  },
  profile: {
    href: "/home",
    linkName: "Profile",
    iconName: "ProfileIcon",
    disabled: false,
  },
};

import Link from "next/link";

import SidebarButton from "@components/sidebar/sidebar-button";
import SidebarProfile from "@components/sidebar/sidebar-profile";
import CustomIcon from "@components/ui/custom-icon";

export default async function Sidebar() {
  return (
    <div className="sticky top-0 hidden overflow-y-auto h-full xl:w-[275px] py-0.5 px-2 select-none sm:flex flex-col justify-between">
      <div className="flex flex-col px-1">
        <div className="flex justify-start rounded-full focus:shadow-[0px_0px_0px_2px_rgba(135,138,140,0.8)]">
          <div className="flex flex-row p-3 rounded-full hover:bg-[#e7e7e8] transition-colors duration-300">
            <Link href="/home">
              <CustomIcon className="h-7 w-7" iconName="XIcon" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-0.5 mb-1">
          {Object.values(SidebarLinks).map((link) => (
            <Link href={link.href} key={link.linkName}>
              <SidebarButton
                buttonName={link.linkName}
                iconName={link.iconName}
                disabled={link.disabled}
                active={true}
              />
            </Link>
          ))}
          <SidebarButton
            buttonName="More"
            iconName="MoreIcon"
            disabled={false}
          />
        </div>
        <Link
          href="/compose/tweet"
          className="hidden xl:flex w-[90%] my-2 p-3 text-white font-bold justify-center bg-twitter-blue rounded-full"
        >
          Post
        </Link>
      </div>
      <div className="my-3">
        {/* <SidebarProfile
          name={user.name}
          username={user.username}
          photoUrl={user.profilePhotoUrl}
          verified={user.isVerified}
        /> */}
      </div>
    </div>
  );
}
