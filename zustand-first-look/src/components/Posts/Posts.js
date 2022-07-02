import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../../store/useStore";
import Post from "./Post";
import "./Posts.css";

export default function Posts() {
  const [loading, setLoading] = useState(true);

  const posts = useStore((state) => state.posts);
  const fetchPosts = useStore((state) => state.fetchPosts);

  useEffect(() => {
    fetchPosts();
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="nav">
        Users
        <p>
          <Link to="/">Go To Home</Link>
        </p>
      </div>
      {loading && "Loading posts"}
      <div className="posts">
        {posts.map((p) => {
          return <Post key={p.id} title={p.title} body={p.body} />;
        })}
      </div>
    </div>
  );
}
