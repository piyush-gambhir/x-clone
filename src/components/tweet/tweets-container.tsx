import Tweet from "@components/tweet/tweet";

type Props = {
  tweets: [];
};

export default function TweetsContainer({ tweets }: Props) {
  return (
    <div className="flex flex-col">
      {tweets.map((tweet, index) => (
        <div
          className={` ${index === 0 ? "border-y" : "border-b"} ${
            index === tweets.length - 1 ? "border-b" : ""
          }`}
          key={tweet.id}
        >
          <Tweet tweetId={tweet.id} />
        </div>
      ))}
    </div>
  );
}
