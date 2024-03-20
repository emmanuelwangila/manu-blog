import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="content">
        <h2 className="">Navbar</h2>

        <div className="links">
          <a className="a" href="/">
            Home
          </a>
          <a className="a" href="/new">
            New Blog
          </a>
          <a className="a" href="/">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
