import { getTweet } from "lib/data";
import Tweet from "pages/component/Tweet";
import prisma from "lib/prisma";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import NewReply from "pages/component/NewReply";
import Tweets from "pages/component/Tweets";

const SingleTweet = ({ tweet , replies}) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <div className="text-white bg-black h-screen text-white">
      <div className="tweets-section text-white p-6">
        <div className="p-6">

         
        </div>
      </div>
      <Tweet tweet={tweet} />
      <NewReply tweet={tweet}/>
      <Tweets tweets={replies}/>
      {session && session.user.email && tweet.author.email && (
        <div className="flex-1 py-2 m-2 text-center">
          <a
            href="#"
            className="flex items-center w-12 px-3 py-2 mt-1 text-base font-medium leading-6 text-gray-500 rounded-full hover:bg-color-accent-hover hover:color-accent-hover"
            onClick={async () => {
              const res = await fetch("/api/tweet", {
                body: JSON.stringify({
                  id: tweet.id,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
                method: "DELETE",
              });

              if (res.status === 401) {
                alert("Unauthorized");
              }
              if (res.status === 200) {
                router.push("/home");
              }
            }}
          >
            delete
          </a>
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  let tweet = await getTweet(params.id, prisma);
  tweet = JSON.parse(JSON.stringify(tweet));

  let replies = await getReplies(params.id, prisma)
  replies = JSON.parse(JSON.stringify(replies))

  return {
    props: {
      tweet,
      replies
    },
  };
};

export default SingleTweet;
