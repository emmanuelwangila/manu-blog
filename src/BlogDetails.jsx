import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetails = () => {
  const { id } = useParams();

  const { blogs, loading, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  return (
    <div>
      blogdetails {id}
      <div> {loading && <div>Loading.... </div>}</div>
      {blogs && <div> {blogs.actor} </div>}
      {error && <div> {error} </div>}
    </div>
  );
};

export default BlogDetails;
