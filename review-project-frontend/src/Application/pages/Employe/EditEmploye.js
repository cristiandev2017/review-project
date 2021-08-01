import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Select from "react-select";
import { withRouter } from "react-router-dom";
import { getEmployeOne } from "./../../../Domain/selectors/employee";
import { employeEditAction } from './../../../Domain/actions/employeActions';

function EditEmploye({ _employeone,employeEditAction, history }) {
  const [fullName, setFullName] = useState(_employeone.fullName);
  const [email, setEmail] = useState(_employeone.email);
  var [services, setServices] = useState();

  //Los que tiene seleccionados
  var services_emp = _employeone.services;

  const editEmploye = (employe) => employeEditAction(employe);

  //Funcion para editar
  const submitEditEmploye = (e) => {
    e.preventDefault()
    editEmploye({
        email,
        services
    })
    setTimeout(() => {
      history.push('/admin-listemployes');  
    }, 2000);
    
  };
  var Servicename = [
    {
      value: 1,
      label: "Corte de cabello",
    },
    {
      value: 2,
      label: "Manicure",
    },
    {
      value: 3,
      label: "Pedicure",
    },
    {
      value: 4,
      label: "Corte de barba",
    },
  ];
  var Ddlhandle = (e) => {
    setServices(Array.isArray(e) ? e.map((x) => x.label) : []);
  };
  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h3 className="text-center">Editar empleado</h3>
          <hr />
          <form onSubmit={submitEditEmploye}>
            <label>Nombre</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              disabled
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            Email
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              disabled
              onChange={(e) => setEmail(e.target.value)}
            />
            Servicios
            <Select isMulti options={Servicename} onChange={Ddlhandle}></Select>
            <p>Seleccionaste:{services + " "}</p>
            <p>
              Los que tenias:
              {services_emp.map((servi) => (
                <li>{servi}</li>
              ))}
            </p>
            <button className="btn btn-primary btn-block" type="submit">
              {" "}
              Editar
            </button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    _employeone: getEmployeOne(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ employeEditAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmploye);
//export default EditEmploye;
