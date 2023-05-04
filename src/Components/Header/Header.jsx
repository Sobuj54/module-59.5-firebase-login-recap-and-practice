import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/social" className="ms-4">
        Social Login
      </Link>
      <Link to="/user" className="ms-4">
        User login
      </Link>
    </div>
  );
};

export default Header;
