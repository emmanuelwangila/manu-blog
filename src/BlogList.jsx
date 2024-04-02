import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // Align items to the center vertically
      }}
    >
      <h2 style={{ color: "blue" }}>{title}</h2>
      {blogs.map((blog) => (
        <div
          style={{
            maxWidth: "400px",
            margin: "10px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out",
            cursor: "pointer",
          }}
          className="blog-card"
          key={blog.id}
        >
          <Link
            to={`blogs/${blog.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2 style={{ color: "blue", fontSize: "20px", margin: "0" }}>
              {blog.title}
            </h2>
            <p style={{ color: "teal", margin: "5px 0 0", fontSize: "14px" }}>
              Actor is {blog.actor}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
