import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{body}</p>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleDetails}>Show Details 2</button>
    </div>
  );
};

export default Post;
