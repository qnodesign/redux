import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { Provider } from "react-redux";
import store from "./store";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <Provider store={store}>
    <div style={styles}>
      <Hello />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
