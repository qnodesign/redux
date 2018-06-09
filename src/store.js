import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_FETCH_FULFILLED":
      return {
        ...state,
        user: action.payload.data
      };
    case "TWEETS_FETCH_FULFILLED":
      console.log(action.payload);
      return {
        ...state,
        tweets: action.payload.data
      };
    default:
      return state;
  }
};

const middleware = applyMiddleware(thunk, promise());

export default createStore(reducer, middleware);
