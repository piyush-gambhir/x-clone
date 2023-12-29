"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

import Loading from "@components/ui/loading";
import UserCard from "@components/user/user-card";

export const variants: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
};

export default function AsideFollowSuggestions() {
  const isLoading = false;

  const dummySuggestionsData = [
    {
      id: "user1",
      name: "John Doe",
      photoURL: "/images/pp/pp.jpg",
      bio: "Tech enthusiast and blogger.",
      username: "john_doe",
      verified: true,
      modal: true,
      following: ["user2", "user3"],
      followers: ["user2", "user3"],
    },
    {
      id: "user2",
      name: "Jane Smith",
      photoURL: "/images/pp/pp.jpg",
      bio: "Loves coding and coffee.",
      username: "jane_smith",
      verified: false,
      modal: true,
      following: ["user2", "user3"],
      followers: ["user2", "user3"],
    },
    {
      id: "user3",
      name: "John Smith",
      photoURL: "/images/pp/pp.jpg",
      bio: "Tech enthusiast and blogger.",
      username: "john_smith",
      verified: true,
      modal: true,
      following: ["user2", "user3"],
      followers: ["user2", "user3"],
    },
  ];

  return (
    <section className="rounded-xl bg-[#f7f9f9]">
      {isLoading ? (
        <Loading className="flex h-52 items-center justify-center p-4" />
      ) : dummySuggestionsData ? (
        <motion.div className="inner:px-4 inner:py-3" {...variants}>
          <h2 className="px-4 py-3 font-extrabold text-xl leading-6">
            Who to follow
          </h2>
          {dummySuggestionsData.map((userData) => (
            <div
              className="hover:bg-[#eff1f1] transition-colors duration-300"
              key={userData.id}
            >
              <UserCard {...userData} />
            </div>
          ))}
          <Link
            href="/people"
            className="px-4 py-3 hover:bg-[#eff1f1] transition-colors duration-300 rounded-xl
          rounded-t-none text-twitter_blue"
          >
            Show more
          </Link>
        </motion.div>
      ) : (
        // <Error />
        <></>
      )}
    </section>
  );
}
