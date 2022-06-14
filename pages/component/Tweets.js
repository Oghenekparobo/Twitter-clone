import Tweet from "./Tweet";


const Tweets = ({ tweets }) => {

  if (!tweets) return null;

  return (
    <>
      {tweets && tweets.map((tweet , index) => ( 
          <Tweet tweet={tweet} key={index} />
      )) }
    </>
  );
};

export default Tweets;
