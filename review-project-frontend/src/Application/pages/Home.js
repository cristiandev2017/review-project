import React, { Fragment } from "react";
//import background from './static/background.jpeg';
import { Link } from "react-router-dom";
import "./static/style.css";

const Home = () => {
  return (
    <Fragment>
      <div className="img-t">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-5 mt-5">
            <h1 className="text-align-center">Bienvenido</h1>
            <div className="rounded-top border border-dark">
              <p className="ml-2" style={{ color: "black" }}>
                Esta es una aplicacion diseñada para el control de citas de un
                centro de belleza
              </p>
              <p className="ml-2" style={{ color: "black" }}>
                Aca podras crear tus citas pendientes con los servicios que
                deseas.
              </p>
              <p className="ml-2" style={{ color: "black" }}>
                Esta practica es totalmente tipo de estudio es decir los datos y
                procedimientos son de tipo experimental
              </p>
              <br />
              <center>
                <Link
                  to="/login"
                  className="btn btn-primary btn-block"
                >
                  Ingresa
                </Link>
                <p>Verifica nuestros servicios</p>
              </center>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <center>
        <br />
        <h1>Acerca de Nosotros</h1>
        <p>
          Somos unos estudiantes del training de desarrollo, nos enfocamos en
          mejorar las experiencias de los usuarios generando aplicaciones
          maravillosas.
        </p>
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem;" }}>
              <div className="card-body">
                <h5 className="card-title text-white bg-primary mb-3">
                  Servicio de Peluqueria
                </h5>
                <p className="card-text">
                  Servicio de corte especializado para dama, peluqueria con
                  todos los estilos vanguardistas de la moda
                </p>
                <Link to="/" className="btn btn-primary">
                  Ver Servicios
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem;" }}>
              <div className="card-body">
                <h5 className="card-title text-white bg-primary mb-3">
                  Servicio de Peluqueria
                </h5>
                <p className="card-text">
                  Servicio de corte especializado para dama, peluqueria con
                  todos los estilos vanguardistas de la moda
                </p>
                <Link to="/" className="btn btn-primary">
                  Ver Servicios
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem;" }}>
              <div className="card-body">
                <h5 className="card-title text-white bg-primary mb-3">
                  Servicio de Peluqueria
                </h5>
                <p className="card-text">
                  Servicio de corte especializado para dama, peluqueria con
                  todos los estilos vanguardistas de la moda
                </p>
               <Link to="/" className="btn btn-primary">
                  Ver Servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </center>
      <br />
      <br />
      <br />
    </Fragment>
  );
};

export default Home;
