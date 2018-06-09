import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "./action";

const Hello = ({ name, user }) => {
  return (
    <div>
      <User />
      <button onClick={fetchUser}>fetch user</button>
    </div>
  );
};

const mstp = state => {
  return {
    user: state.user
  };
};

export default Hello;
