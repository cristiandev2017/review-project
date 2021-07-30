import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <br />
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <div className="nav-link active">Administrador de empleado</div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin-newemploye">
                Crear Empleado
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin-listemployes">
                Ver Empleados
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin-editemployesemail">
                Editar Empleados por correo
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="card-body">
            <h6 className="card-title">Acá algunas recomendaciones para el administrador</h6>
            <hr></hr>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
      <br/><br/>
      <div className="row">
        <div className="col-4">
          <br />
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <div className="nav-link active">Administrador de Clientes</div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin-newemploye">
                Ver Clientes
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="card-body">
            <h6 className="card-title">Acá algunas recomendaciones para el administrador</h6>
            <hr></hr>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
</div>
  );
}

export default Admin;
