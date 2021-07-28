import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <nav className="navbar navbar-dark bg-primary">
    <Link to="/" className="navbar-brand">HairCut</Link>
    <div className="right">
      <Link to="/login"className="navbar-brand">Login</Link>
    </div>
  </nav>
  );
};

export default Header;
