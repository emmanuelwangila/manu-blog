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
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        // alignItems: "center",
        borderRadius: "5px",
        backgroundColor: "black",
      }}
    >
      <h2 style={{ color: "blue", margin: "5px", padding: "5px" }}>
        {" "}
        Add a new Blog
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "5px",
          alignSelf: "center",
          maxWidth: "800px", // Added maxWidth for better responsiveness
          width: "100%", // Added width to make it responsive
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "white",
            border: "none", // Removed border
          }}
        >
          <label style={{ margin: "3px", padding: "2px ", color: "teal" }}>
            blog title :
          </label>
          <input
            style={{
              width: "100%",
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
              width: "100%",
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
            style={{
              margin: "4px",
              padding: "6px",
              borderRadius: "5px",
              width: "100%",
            }}
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
