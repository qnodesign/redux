import React from "react";
import { connect } from "react-redux";
import { fetchUser, fetchTweets } from "./action";
import User from "./user";
import Tweets from "./tweets";

const Hello = ({ user, tweets }) => {
  return (
    <div>
      <button onClick={fetchUser}>fetch user</button>
      <br />
      <User user={user} />
      {user && user.id ? (
        <button onClick={() => fetchTweets(user.id)}>fetch tweets</button>
      ) : (
        ""
      )}
      <Tweets tweets={tweets} />
    </div>
  );
};

const mstp = state => {
  return {
    user: state.user,
    tweets: state.tweets
  };
};

export default connect(mstp)(Hello);
