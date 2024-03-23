import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const { blogs, loading, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const handleDelete = () => {
    fetch("http://locallhost:8000/blogs" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      console.log("Blog deleted succesfully");
      history.push("/");
    });
  };

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
