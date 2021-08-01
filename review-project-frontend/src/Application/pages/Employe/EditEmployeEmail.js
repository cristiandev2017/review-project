import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Select from "react-select";
import { withRouter } from "react-router-dom";
import { getEmployeOne } from "../../../Domain/selectors/employee";
import { employeEditAction, onlyEmployeEmailAction } from '../../../Domain/actions/employeActions';


function EditEmployeEmail({ _employeone,employeEditAction,onlyEmployeEmailAction }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  var [services, setServices] = useState();
  const [_email, _setEmail] = useState();

  //Los que tiene seleccionados
  const editEmploye = (employe) => employeEditAction(employe);
  const searchEmploye = (employe) => onlyEmployeEmailAction(employe);

  //Funcion para editar
  const submitEditEmploye = (e) => {
    e.preventDefault()
    editEmploye({
        email,
        services
    })
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
  
  const searchWithEmail= async () =>{
    const response = await searchEmploye({
      email:_email
    })
    console.log("Prueba magica", response);
   }
  
  var Ddlhandle = (e) => {
    setServices(Array.isArray(e) ? e.map((x) => x.label) : []);
  };
  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h3 className="text-center">Editar empleado</h3>
          <label>Por favor digite el correo:</label>
          <input onChange={(e) => _setEmail(e.target.value)} type="text" style={{width:"300px"}}></input><button className="btn btn-primary" onClick={searchWithEmail}>Buscar</button>
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
  return bindActionCreators({ employeEditAction, onlyEmployeEmailAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployeEmail);
//export default EditEmploye;
