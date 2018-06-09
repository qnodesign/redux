import React from "react";

const User = ({ user }) => {
  return <div>{user && user.id ? <h2>{user.name}</h2> : ""}</div>;
};

export default User;
