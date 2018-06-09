import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { Provider } from "react-redux";
import store from "./store";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const fetchUser = () => {
  store.dispatch({
    type: "USER_FETCH"
  });
};

const App = () => (
  <Provider store={store}>
    <div style={styles}>
      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
