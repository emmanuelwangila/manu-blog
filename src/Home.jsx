import React, { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const handleDelete = (id) => {};

  const [blogs, setBlogs] = useState([
    {
      title: "Movie Night",
      actor: "Manu",
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
      title: "Series",
      actor: "Chris Evans",
      date: "JUne ",
      genre: "Action",
      id: 3,
    },
    {
      title: "Movie",
      actor: "Manu",
      date: "JUne ",
      genre: "Action",
      id: 4,
    },
  ]);

  return (
    <div style={{ margin: "30px" }}>
      <h2 style={{ color: "green" }}>Home Page</h2>
      <BlogList
        blogs={blogs}
        handleDelete={handleDelete}
        title="All Blogs Available!"
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.actor === "Manu")}
        title="Manu's Blogs"
      />
    </div>
  );
};

export default Home;
