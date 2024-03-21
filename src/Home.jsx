import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div style={{ margin: "30px" }}>
      <h2 style={{ color: "green" }}>Home Page</h2>
      {loading && <div>Loading </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs Available!" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.actor === "Manu")}
        title="Manu's Blogs"
      /> */}
    </div>
  );
};

export default Home;
