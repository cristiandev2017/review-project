import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/newemploye">New Empleado</Link>
      </li>
    </ul>
  );
};

export default Header;
