import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home / X",
  description: "Home / X",
};

import MainHeader from "@components/MainHeader";
import TweetsContainer from "@/components/tweet/tweets-container";
import NewTweet from "@/components/tweet/new-tweet";
import AsideSearch from "@/components/aside/aside-search";
import AsideSubscribe from "@/components/aside/aside-subscribe";
import AsideFooter from "@/components/aside/aside-footer";
import AsideTrends from "@/components/aside/aside-trends";
import AsideFollowSuggestions from "@components/aside/aside-follow-suggestions";

export default function Home() {
  return (
    <div className="flex flex-row gap-8">
      <div className="w-[600px] shrink flex flex-col border-x-[0.1px] border-[#EFF3F4]">
        <MainHeader title="Home">
          <div className="grid grid-cols-2 text-[15px] leading-5 font-bold">
            <div className="flex items-center justify-center px-4 hover:bg-[#dfdede] transition-colors duration-300 cursor-pointer">
              <span className="py-4">Following</span>
            </div>
            <div className="flex items-center justify-center px-4 hover:bg-[#dfdede] transition-colors duration-300 cursor-pointer">
              <span className="py-4">For you</span>
            </div>
          </div>
        </MainHeader>{" "}
        {/* <NewTweet /> */}
        {/* <TweetsContainer tweets={tweets} /> */}
      </div>

      <div className="hidden lg:flex flex-col gap-6 lg:w-[290px] xl:w-[350px]">
        <AsideSearch />
        <AsideSubscribe />
        <AsideTrends />
        <AsideFollowSuggestions />
        <AsideFooter />
      </div>
    </div>
  );
}
