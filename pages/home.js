import { useSession } from "next-auth/react";
import Loading from "./loading";
import Newtweet from "./component/NewTweet";
import Search from "./search";
import Sidebar from "./sidebar";
import { getTweets } from "lib/data";
import prisma from "lib/prisma";
import { useRouter } from "next/router";

export default function Home({ tweets }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (!session) return <Loading />;

  if (!session.user.name) {
    router.push("/setup");
  }

  if (status === "loading") return null;

  return (
    <div className="mx-auto  px-auto bg-black wrapper">
      <div className='hidden md:grid md:grid-cols-4 md:block"'>
        {/* sidebar component */}
        <div className="sidebar-component">
          <Sidebar />
        </div>

        {/* home component */}
        <div className="home-component col-span-2 visible md:block">
          <Newtweet tweets={tweets} />
        </div>

        {/* search and trending component */}
        <div className="search-and-trending_component">
          <Search />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  let tweets = await getTweets(prisma);
  tweets = JSON.parse(JSON.stringify(tweets));

  return {
    props: {
      tweets,
    },
  };
};
