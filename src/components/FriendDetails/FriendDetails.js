import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  return (
    <div>
      <h1>Details about ::: {friend.name}</h1>
      <p>
        {" "}
        <i>Email: {friend.email}</i>
      </p>
      <p>{friend.phone}</p>
    </div>
  );
};

export default FriendDetails;
