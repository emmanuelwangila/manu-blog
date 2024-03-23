import React from "react";

const Create = () => {
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
          justifyContent: "center",
          margin: "5px",
          border: "2",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "800px",
          }}
        >
          <label style={{ margin: "3px", padding: "2px " }}>blog title :</label>
          <input
            style={{
              width: "full",
              borderRadius: "6px",
              margin: "5px",
              padding: "5px",
            }}
            type="text"
            required
          />
          <label> blog author:</label>
          <select>
            <option value="manu">Manu</option>
            <option value="manu">Manu</option>
          </select>
          <label>blog body :</label>
          <textarea required placeholder="manu">
            {" "}
          </textarea>
          <button>Add Blog</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
