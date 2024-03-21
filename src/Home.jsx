import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // Move 1000 inside the dependency array

  return (
    <div style={{ margin: "30px" }}>
      <h2 style={{ color: "green" }}>Home Page</h2>
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
