import React,{useEffect} from "react";
import { Link } from 'react-router-dom';
import {auth} from "../../Infrastructure/services/firebase/firebase"
let url =""
let valadmin = false;
const Header = () => {
  useEffect(() => {
   url = window.location.pathname;
   valadmin =`${url.includes("/admin") ? true : false}`;
  });

  return (
  <nav className="navbar navbar-dark bg-primary">
    {valadmin ? (<Link to="/admin" className="btn btn-secondary">ADMINISTRACION</Link>) :(<Link to="/" className="navbar-brand">HairCut</Link>
    )}
    <div className="right">
    {auth().currentUser? (
          <button
            className="btn btn-danger d-block d-md-inline-block" onClick={() => auth().signOut()}>
            Cerrar sesión
          </button>
    ):(<Link to="/login"className="navbar-brand" >Login</Link>)}      
    </div>
  </nav>
  );
};

export default Header;