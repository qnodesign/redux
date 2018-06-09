import React from "react";

const Tweet = ({ tweet, key }) => {
  return <li key={key}>{tweet && tweet.title}</li>;
};

const Tweets = ({ tweets }) => {
  return (
    <div>
      {tweets && tweets.length ? (
        <ul>{tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)}</ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Tweets;
