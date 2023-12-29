"use client";
import Link from "next/link";
import cn from "clsx";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

// import { useTrends } from "@lib/api/trends";  // Commented for future use

// import { Error } from "@components/UI";
import AsideTrend from "@components/aside/aside-trend";

export const variants: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
};

type Props = {
  inTrendsPage?: boolean;
};

const dummyTrends = [
  {
    trendName: "Youtube",
    tweetVolume: 242665555,
    trendLink: "#",
    location: "Worldwide",
  },
  {
    trendName: "Tucker Carlson",
    tweetVolume: 4554000,
    trendLink: "#",
    location: "USA",
  },
  {
    trendName: "X",
    tweetVolume: 10054540,
    trendLink: "#",
    location: "Canada",
  },
  {
    trendName: "#Piyush Gambhir",
    tweetVolume: 554400,
    trendLink: "#",
    location: "UK",
  },
  {
    trendName: "#Google",
    tweetVolume: 878787878,
    trendLink: "#",
    location: "Australia",
  },
];

export default function AsideTrends({ inTrendsPage }: Props) {
  // const { data, loading } = useTrends(1, inTrendsPage ? 100 : 10, { refreshInterval: 30000 });
  // const { trends, location } = data ?? {};  // Commented for future use
  const trends = dummyTrends;

  return (
    <section
      className={cn(!inTrendsPage && "hover-animation rounded-xl bg-[#f7f9f9]")}
    >
      {/* Commented loading state for future use */}
      {/* {loading ? (
        <Loading />
      ) : trends ? ( */}
      {trends ? (
        <motion.div
          className={cn("inner:px-4 inner:py-3", inTrendsPage && "mt-0.5")}
          {...variants}
        >
          {!inTrendsPage && (
            <h2 className="px-4 py-3 font-extrabold text-xl leading-6">
              What&apos;s Happending
            </h2>
          )}
          {trends.map((trend) => (
            <AsideTrend
              key={trend.trendName}
              trendName={trend.trendName}
              trendLink={trend.trendLink}
              tweetVolume={trend.tweetVolume}
            />
          ))}
          {!inTrendsPage && (
            <Link href="/trends">
              <div
                className="px-4 py-3 hover:bg-[#eff1f1] transition-colors duration-300 rounded-xl
                           rounded-t-none text-twitter_blue"
              >
                Show more
              </div>
            </Link>
          )}
        </motion.div>
      ) : (
        // <Error />
        <></>
      )}
    </section>
  );
}
