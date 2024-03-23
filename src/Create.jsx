import React from "react";

const Create = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "5px",
        padding: "5px",
        maxWidth: "500px,",
        justifyContent: "center",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ color: "blue", margin: "5px", padding: "5px" }}>
        {" "}
        Add a new Blog
      </h2>

      <div>
        <form>
          <label>blog title :</label>
          <input type="text" required />
          <label> blog author:</label>
          <select>
            <option value="manu">Manu</option>
            <option value="manu">Manu</option>
          </select>
          <label>blog body :</label>
          <textarea required> </textarea>
        </form>
      </div>
    </div>
  );
};

export default Create;
