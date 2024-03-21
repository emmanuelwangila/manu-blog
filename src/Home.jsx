import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/blogs");
        if (!response.ok) {
          throw new Error("error fetching data");
        }
        const data = await response.json();
        setBlogs(data);
        console.log(data);
      } catch (error) {
        console.error("error fetching data", error.message);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div style={{ margin: "30px" }}>
      <h2 style={{ color: "green" }}>Home Page</h2>
      {blogs && (
        <BlogList
          blogs={blogs}
          handleDelete={handleDelete}
          title="All Blogs Available!"
        />
      )}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.actor === "Manu")}
        title="Manu's Blogs"
      /> */}
    </div>
  );
};

export default Home;
