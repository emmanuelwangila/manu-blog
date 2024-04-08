import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div
      style={{
        display: "flex",
        // gridTemplateColumns: "1fr",
        // For small and medium screens, display as a single column
        flexDirection: "column",
        borderRadius: "5px",
        backgroundColor: "black",
        color: "white",
        margin: "5px",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "blue" }}>{title}</h2>

      <div>
        <button
          className=""
          style={{
            color: "white",
            margin: "5px",
            padding: "5px",
            backgroundColor: "blue",
            borderRadius: "5px",
          }}
        >
          Add a Blog
        </button>
      </div>

      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            margin: "5px",
            maxWidth: "600px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            cursor: "pointer",
          }}
          className="blog-card"
        >
          <Link
            to={`blogs/${blog.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2 style={{ color: "blue", fontSize: "20px", margin: "0" }}>
              {blog.title}
            </h2>
            <p style={{ color: "white", margin: "5px 0 0", fontSize: "14px" }}>
              Actor is {blog.actor}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
