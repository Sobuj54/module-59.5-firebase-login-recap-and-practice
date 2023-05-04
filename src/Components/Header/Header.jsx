import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/social" className="ms-4">
        Social Login
      </Link>
    </div>
  );
};

export default Header;
