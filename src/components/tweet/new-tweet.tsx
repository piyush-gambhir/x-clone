const TweetOptions = [
  { name: "Media", icon: "MediaIcon", onClick: () => {} },
  { name: "Gif", icon: "GifIcon", onClick: () => {} },
  { name: "Poll", icon: "PollIcon", onClick: () => {} },
  { name: "Emoji", icon: "EmojiIcon", onClick: () => {} },
  { name: "Schedule", icon: "ScheduleIcon", onClick: () => {} },
  { name: "Location", icon: "TagLocationIcon", onClick: () => {} },
];

import Button from "@components/ui/button";
import HeroIcon from "@components/ui/hero-icon";
import ToolTip from "@components/ui/tooltip";
import CustomIcon from "@components/ui/custom-icon";
import UserAvatar from "@/components/user/user-avatar";
import TweetInput from "./tweet-input";

export default async function NewTweet() {
  return (
    <div className="pt-1">
      <div className="flex flex-row px-4">
        <div className="flex justify-start pt-3 mr-3">
          <UserAvatar
            src={user.profilePhotoUrl}
            alt="Profile Picture"
            size={40}
          />
        </div>
        <div className="w-full flex flex-col pt-1">
          <div>
            <div className="pb-3">
              <Button className="py-1 flex flex-row gap-2 items-center border rounded-full px-3 hover:bg-twitter-blue hover:bg-opacity-10 transition-colors duration-300">
                <span className="text-twitter-blue text-sm leading-4 font-bold">
                  Everyone
                </span>
                <HeroIcon
                  iconName="ChevronDownIcon"
                  className="h-4 w-4 text-twitter-blue"
                />
              </Button>
            </div>
          </div>
          <div className="py-3">
            <TweetInput />
          </div>
          <div>
            <div className="pb-3">
              <Button className="flex flex-row gap-1 items-center p-1 rounded-full hover:bg-twitter-blue hover:bg-opacity-10 transition-colors duration-300">
                <CustomIcon
                  iconName="ShareEveryoneIcon"
                  className="h-4 w-4 fill-twitter-blue"
                />
                <span className="text-twitter-blue font-bold text-sm leading-4">
                  Everyone can reply
                </span>
              </Button>
            </div>
          </div>
          <div className="mx-0.5 pb-2 border-t flex flex-row justify-between">
            <div className="flex flex-row gap-2 mt-3">
              {TweetOptions.map((option) => (
                <Button key={option.name} className="relative group">
                  <div className="p-1 rounded-full hover:bg-twitter-blue hover:bg-opacity-10 transition-colors duration-300 ">
                    <CustomIcon
                      iconName={option.icon}
                      className="h-5 w-5 fill-twitter-blue"
                    />
                  </div>
                  <ToolTip tip={option.name} className="top-8" />
                </Button>
              ))}
            </div>
            <div className="mt-3">
              <Button className="ml-3 py-1 px-4 rounded-full bg-twitter-blue transition-colors duration-300">
                <span className="text-white text-[15px] leading-5 font-bold">
                  Post
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
