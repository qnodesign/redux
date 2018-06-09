import store from "./store";
import axios from "axios";

export const fetchUser = () => {
  store.dispatch({
    type: "USER_FETCH",
    payload: axios.get("https://jsonplaceholder.typicode.com/users/1")
  });
};

export const fetchTweets = uId => {
  store.dispatch({
    type: "TWEETS_FETCH",
    payload: axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${uId}`
    )
  });
};
