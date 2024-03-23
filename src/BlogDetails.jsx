import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetails = () => {
  const { id } = useParams();

  const { blogs, loading, error } = useFetch("https://localhost:8000/blogs");

  return (
    <div>
      blogdetails {id}
      <div> error && {error} </div>
    </div>
  );
};

export default BlogDetails;
