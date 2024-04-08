// import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const Home = () => {
  const { blogs, error, loading } = useFetch("http://localhost:8000/blogs");

  // Move 1000 inside the dependency array

  return (
    <div
      style={{
        margin: "",
        backgroundColor: "black",
        borderRadius: "5px",
        width: "full",
        height: "full",
      }}
    >
      <h2 style={{ color: "green" }}>Home Page</h2>

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
      {error && <div> {error} </div>}
      {loading && <div>Loading ..... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs Available!" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.actor === "Manu")}
        title="Manu's Blogs"
      /> */}
    </div>
  );
};

export default Home;
