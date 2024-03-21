import React from "react";
import { Link } from "react-router-dom";

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
          <Link
            className="a"
            to="/new-blog"
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              color: "black",
            }}
          >
            New Blog
          </Link>
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
