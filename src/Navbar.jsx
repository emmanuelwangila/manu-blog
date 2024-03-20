import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="content">
        <h3 className=""> Manuel's Blog</h3>

        <div className="links">
          <a
            className="a"
            href="/"
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              color: "black",
            }}
          >
            Home
          </a>
          <a
            className="a"
            href="/new"
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              color: "black",
            }}
          >
            New Blog
          </a>
          <a
            className="a"
            href="/"
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              color: "black",
            }}
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
