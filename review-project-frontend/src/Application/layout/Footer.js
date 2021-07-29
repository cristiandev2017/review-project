import React, {Fragment} from "react";
import { Link } from 'react-router-dom';
import './static/style.css'

const Footer = () => {
  return (
  <Fragment>
    <br/><br/>
    <footer className="footer-fn bg-light text-center text-lg-start">
      <div
        className="container text-center p-3"
      >
        © 2021 Copyright:
        <Link className="text-dark" to="/">
          Training
        </Link>
      </div>
    </footer>
</Fragment>
  );
};

export default Footer;
