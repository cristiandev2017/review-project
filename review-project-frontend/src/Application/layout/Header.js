import React from "react";
import { Link } from 'react-router-dom';
import {auth} from "../../Infrastructure/services/firebase/firebase"

const Header = () => {
  return (
  <nav className="navbar navbar-dark bg-primary">
    <Link to="/" className="navbar-brand">HairCut</Link>
    <div className="right">
    {auth().currentUser? (
          <button
            className="btn btn-danger d-block d-md-inline-block" onClick={() => auth().signOut()}>
            Cerrar sesión
          </button>
    ):(<Link to="/login"className="navbar-brand">Login</Link>)}      
    </div>
  </nav>
  );
};

export default Header;
