import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend }) => {
  const { id, username, name, email } = friend;
  return (
    <div className="friend">
      <h1>Name: {name}</h1>
      <p>Email: {email}</p>
      <p>
        <small>
          <Link to={`/friend/${id}`}>{username}</Link>
        </small>
      </p>
    </div>
  );
};

export default Friend;
