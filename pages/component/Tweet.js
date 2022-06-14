import timeago from "lib/timeago";
import Image from "next/image";

const Tweet = ({ tweet }) => {
  return (
    <div className="tweets-container mx-8 pt-6 pb-8 text-center">
      <div className="flex gap-4 tweeets py-4">
        <div className="img-container">
          {tweet.author.image && (
            <Image src={tweet.author.image} alt="" className="rounded-full" width="40" height="40" />
          )}
        </div>

        <div className="name-content_date-container flex flex-col">
          <div className="name-date flex gap-2">
            <h4>{tweet.author.name} </h4>
            <p className="text-small text-gray-500 ">{tweet.author.email}</p>
            <p className="text-verySmall text-gray-500 tracking-wide">{timeago.format(new Date(tweet.createdAt))}</p>
          </div>

          <div className="content text-small">
            <p>{tweet.content} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
