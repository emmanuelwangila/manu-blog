import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [actor, setActor] = useState("");
  const [loading, isLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, author, actor };
    console.log("blog", blog);
    isLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application-json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog Added");
    });
    isLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "5px",
        padding: "5px",
        width: "full",
        justifyContent: "center",
        // alignItems: "center",
        borderRadius: "5px",
        backgroundColor: "gray",
      }}
    >
      <h2 style={{ color: "blue", margin: "5px", padding: "5px" }}>
        {" "}
        Add a new Blog
      </h2>

      <div
        style={{
          display: "flex",
          width: "100vh",
          flexDirection: "column",
          margin: "5px",
          alignSelf: "center",
          border: "2",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "800px",
          }}
        >
          <label style={{ margin: "3px", padding: "2px ", color: "teal" }}>
            blog title :
          </label>
          <input
            style={{
              width: "full",
              borderRadius: "6px",
              margin: "5px",
              padding: "5px",
            }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label style={{ margin: "3px", padding: "2px ", color: "teal" }}>
            blog author :
          </label>
          <select
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            style={{
              width: "full",
              borderRadius: "5px",
              margin: "3px",
              padding: "5px",
            }}
          >
            <option value="manu">Manu</option>
            <option value="manu">Manu</option>
          </select>
          <label style={{ color: "teal", margin: "3px", padding: "3px" }}>
            blog body :
          </label>
          <textarea
            onChange={(e) => setActor(e.target.value)}
            value={actor}
            style={{ margin: "4px", padding: "6px", borderRadius: "5px" }}
            required
            placeholder="manu"
          >
            {" "}
          </textarea>
          {!loading && (
            <button
              style={{
                backgroundColor: "green",
                cursor: "pointer",
                borderRadius: "5px",
                text: "white",
                margin: "4px",
                padding: "6px",
                display: "flex", // Center the content horizontally
                justifyContent: "center", // Align content within the button
                alignItems: "center", // Vertically center the content (optional)
              }}
            >
              Add Blog
            </button>
          )}
          {loading && (
            <button
              disabled
              style={{
                backgroundColor: "green",
                cursor: "pointer",
                borderRadius: "5px",
                text: "white",
                margin: "4px",
                padding: "6px",
                display: "flex", // Center the content horizontally
                justifyContent: "center", // Align content within the button
                alignItems: "center", // Vertically center the content (optional)
              }}
            >
              Adding Blog.....
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Create;
