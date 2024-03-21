import React, { useState } from "react";
import BlogList from "./BlogList";

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
      <h2 style={{ color: "green" }}>Home Page</h2>
      <BlogList blogs={blogs} title="All Blogs Available!" />
    </div>
  );
};

export default Home;
