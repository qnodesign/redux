import store from "./store";

export const fetchUser = () => {
  store.dispatch({
    type: "USER_FETCH"
  });
};
