import UserName from "@components/user/user-name";
import UserUsername from "@components/user/user-username";
import UserAvatar from "@components/user/user-avatar";
import ImagesPreview from "@components/ui/image-preview";
import TweetOptions from "@components/tweet/tweet";

type Props = {
  tweetId: string;
};

export default async function Tweet({ tweetId }: Props) {
  return (
    <div className="grid grid-flow-col px-4 pt-3 hover:bg-[#f7f7f7] transition-colors duration-300">
      <div className="mr-3">
        <UserAvatar
          username={user.username || ""}
          src={user.profilePhotoUrl || ""}
          alt={user.name || ""}
          size={48}
        />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex flex-row gap-1">
          <UserName
            name={user.name}
            verified={user.isVerified}
            username={user.username}
            className="font-bold cursor-pointer hover:underline"
            openProfileOnClick={true}
          />
          <UserUsername username={user.username} />
        </div>
        <p className="font-normal text-[15px] leading-5 text-twitter-black">
          {tweet.text}
        </p>
        <div className="mt-1 flex flex-col gap-2 ">
          {/* {images && (
            <ImagesPreview tweet imagesPreview={tweett.images} previewCount={0} />
          )} */}
        </div>
        <div className="my-2">
          <TweetOptions />
        </div>
      </div>
    </div>
  );
}
