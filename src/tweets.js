import React from "react";

const Tweet = ({ tweet }) => {
  return <li>{tweet && tweet.id}</li>;
};

const Tweets = ({ tweets }) => {
  return (
    <div>
      {tweets && tweets.length ? (
        <ul>{tweets.map(tweet => <Tweet tweet={tweet} />)}</ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Tweets;
