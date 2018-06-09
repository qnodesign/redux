import { createStore } from "redux";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_FETCH":
      console.log("hey");
      return state;
    default:
      return state;
  }
};

export default createStore(reducer);
