import React, { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Movie",
      actor: "Chris Evans",
      date: "JUne ",
      genre: "Action",
      id: 1,
    },
    {
      title: "Movie",
      actor: "Chris Evans",
      date: "JUne ",
      genre: "Action",
      id: 2,
    },
    {
      title: "Movie",
      actor: "Chris Evans",
      date: "JUne ",
      genre: "Action",
      id: 3,
    },
    {
      title: "Movie",
      actor: "Chris Evans",
      date: "JUne ",
      genre: "Action",
      id: 4,
    },
  ]);

  return (
    <div style={{ margin: "30px" }}>
      <h2>Home Page</h2>
      {blogs.map((blog) => (
        <div
          style={{
            // maxWidth: "640px",
            margin: "3px",
            padding: "3px",
            display: "flex",
            flexDirection: "column", // Change to column layout
            justifyContent: "flex-center", // Justify content to the start
            alignItems: "flex-center", // Align items to the start
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

export default Home;
