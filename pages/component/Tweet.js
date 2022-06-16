import timeago from "lib/timeago";
import Image from "next/image";
import Link from "next/link";

const Tweet = ({ tweet }) => {
  return (
    <div className="tweets-container mx-8 pt-6 pb-8 text-center">
      <div className="flex gap-4 tweeets py-4">
        <div className="img-container">
          {tweet.author.image && (
            <Image
              src={tweet.author.image}
              alt=""
              className="rounded-full"
              width="40"
              height="40"
            />
          )}
        </div>

        <div className="name-content_date-container flex flex-col">
          <div className="name-date flex gap-2">
            <Link href={`/${tweet.author.name}`}>
              <a>{tweet.author.name} </a>
            </Link>
            <p className="text-small text-gray-500 ">{tweet.author.email}</p>
            <Link href={`/${tweet.author.name}/status/${tweet.id}`}>
              <a className="hover:underline">
                {timeago.format(new Date(tweet.createdAt))}
              </a>
            </Link>
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
