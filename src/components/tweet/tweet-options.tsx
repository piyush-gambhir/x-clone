"use client";
import { useState, useEffect } from "react";
import { CustomIcon, ToolTip } from "@/components/UI";
import { formatNumber } from "@/lib/utils";

export default function TweetOptions() {
  const [isLiked, setIsLiked] = useState(false);
  const [isReposted, setIsReposted] = useState(false);

  const TweetStat = formatNumber(0);

  return (
    <div className="flex flex-row justify-between cursor-pointer select-none">
      <button className="group flex flex-row gap-0.5 items-center">
        <div
          className={`p-[6px] rounded-full ${"group-hover:bg-twitter-blue"} group-hover:bg-opacity-10 ${"group-hover:text-twitter-blue"} transition-colors duration-200`}
        >
          <div className="relative">
            <CustomIcon
              iconName={"ReplyIcon"}
              className={`h-5 w-5 fill-twitter-dark-gray ${"group-hover:fill-twitter-blue"} transition-colors duration-200`}
            />
            <ToolTip tip={"Reply"} className="top-7 left-0" />
          </div>
        </div>
        <span
          className={`text-[12px] text-twitter-dark-gray ${"group-hover:text-twitter-blue"} transition-colors duration-200`}
        >
          {TweetStat}
        </span>
      </button>
      <button className="group flex flex-row gap-0.5 items-center">
        <div
          className={`p-[6px] rounded-full ${"group-hover:bg-twitter-repost-green"} group-hover:bg-opacity-10 ${"group-hover:text-twitter-repost-green"} transition-colors duration-200`}
        >
          <div className="relative">
            <CustomIcon
              iconName={"RepostIcon"}
              className={`h-5 w-5 fill-twitter-dark-gray ${"group-hover:fill-twitter-repost-green"} transition-colors duration-200 ${
                isReposted && "fill-twitter-repost-green"
              }`}
            />
            <ToolTip tip={"Repost"} className="top-7 left-0" />
          </div>
        </div>
        <span
          className={`text-[12px] text-twitter-dark-gray ${"group-hover:text-twitter-repost-green"} transition-colors duration-200 ${
            isReposted && "text-twitter-repost-green"
          }`}
        >
          {TweetStat}
        </span>
      </button>
      <button className="group flex flex-row gap-0.5 items-center">
        <div
          className={`p-[6px] rounded-full ${"group-hover:bg-twitter-like-pink"} group-hover:bg-opacity-10 ${"group-hover:text-twitter-blue"} transition-colors duration-200`}
        >
          <div className="relative">
            <CustomIcon
              iconName={"LikeIcon"}
              className={`h-5 w-5 fill-twitter-dark-gray ${"group-hover:fill-twitter-like-pink"} transition-colors duration-200 ${
                isLiked && "fill-twitter-like-pink"
              }`}
            />
            <ToolTip tip={"Like"} className="top-7 left-0" />
          </div>
        </div>
        <span
          className={`text-[12px] text-twitter-dark-gray ${"group-hover:text-twitter-like-pink"} transition-colors duration-200 ${
            isLiked && "text-twitter-like-pink"
          }`}
        >
          {TweetStat}
        </span>
      </button>
      <button className="group flex flex-row gap-0.5 items-center">
        <div
          className={`p-[6px] rounded-full ${"group-hover:bg-twitter-blue"} group-hover:bg-opacity-10 ${"group-hover:text-twitter-blue"} transition-colors duration-200`}
        >
          <div className="relative">
            <CustomIcon
              iconName={"ViewIcon"}
              className={`h-5 w-5 fill-twitter-dark-gray ${"group-hover:fill-twitter-blue"} transition-colors duration-200`}
            />
            <ToolTip tip={"View"} className="top-7 left-0" />
          </div>
        </div>
        <span
          className={`text-[12px] text-twitter-dark-gray ${"group-hover:text-twitter-blue"} transition-colors duration-200`}
        >
          {TweetStat}
        </span>
      </button>

      <div className="relative">
        <button className=" group p-[6px] rounded-full hover:bg-twitter-blue hover:bg-opacity-10">
          <CustomIcon
            iconName="ShareIcon"
            className="h-5 w-5 fill-twitter-dark-gray group-hover:fill-twitter-blue transition-colors duration-200"
          />
          <ToolTip tip="Share" className="top-9 left-0" />
        </button>
      </div>
    </div>
  );
}
