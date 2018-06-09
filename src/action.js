import store from "./store";
import axios from "axios";

export const fetchUser = () => {
  store.dispatch(dispatch => {
    dispatch({
      type: "USER_FETCH",
      payload: axios.get("https://jsonplaceholder.typicode.com/users/10")
    })
      .then(res => {
        dispatch({
          type: "TWEETS_FETCH",
          payload: axios.get(
            `https://jsonplaceholder.typicode.com/posts?userId=${
              res.value.data.id
            }`
          )
        });
      })
      .catch(err => {
        console.log("no user found with this Id");
      });
  });
};
