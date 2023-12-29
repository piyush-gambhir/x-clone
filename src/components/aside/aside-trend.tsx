import Link from "next/link";

import Button from "@components/ui/button";
import CustomIcon from "@components/ui/custom-icon";
import ToolTip from "@components/ui/tooltip";

import formatNumber from "@lib/utils/format-number";

export type Props = {
  trendName: string;
  tweetVolume: number;
  trendLink: string;
  location?: string;
  trendingCategory?: string;
};

export default function AsideTrend({
  trendName,
  tweetVolume,
  trendLink,
  location,
  trendingCategory,
}: Props) {
  return (
    <Link href={trendLink} key={trendName}>
      <div className="relative cursor-pointer py-3 px-4 hover:bg-[#eff1f1] transition-colors duration 300">
        <div className="absolute right-3 top-2">
          <Button className="relative group cursor-not-allowed bg-blue p-1 hover:bg-twitter-blue/10">
            <CustomIcon
              className="h-5 w-5 fill-twitter-dark-gray group-hover:fill-twitter-blue"
              iconName="ThreeDotsHorizontalIcon"
            />
            <ToolTip tip="More" />
          </Button>
        </div>
        <p className="text-[13px] leading-4 font-normal text-[#536471]">
          Trending
        </p>
        <p className="mt-0.5 text-[15px] leading-5 font-bold text-[#0F1419FF]">
          {trendName}
        </p>
        <p className="mt-1 text-[13px] leading-4 text-[#536471]">
          {formatNumber(tweetVolume)} posts
        </p>
      </div>
    </Link>
  );
}
