import React from "react";

const BlogList = (props) => {
  const blogs = props.blogs;
  return (
    <div>
      {blogs.map((blog) => (
        <div
          style={{
            // maxWidth: "640px",
            margin: "3px",
            padding: "3px",
            display: "flex",
            flexDirection: "column", // Change to column layout
            justifyContent: "flex-start", // Justify content to the start
            alignItems: "flex-start",
            hover: "bg-blue",

            // Align items to the start
          }}
          className="blog-preview"
          key={blog.id}
        >
          <h2
            style={{
              color: "blue",
              fontSize: "16px",
              margin: "3px",
              padding: "3px",
            }}
          >
            {blog.title}
          </h2>
          <p style={{ color: "teal", margin: "2px", padding: "4px" }}>
            Actor is {blog.actor}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
