import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getEmployeOne } from "../../../Domain/selectors/employee";
import {
  employeEditAction,
  onlyEmployeEmailAction,
} from "../../../Domain/actions/employeActions";

function EditEmployeEmail({
  _employeone,
  onlyEmployeEmailAction,
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [_email, _setEmail] = useState();

  //Los que tiene seleccionados
  const searchEmploye = (employe) => onlyEmployeEmailAction(employe);

  //Funcion para editar
    const searchWithEmail = async () => {
    await searchEmploye({
      email: _email,
    });
  };

  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h3 className="text-center">Buscar empleado por correo</h3>
          <label>Por favor digite el correo:</label>
          <input
            onChange={(e) => _setEmail(e.target.value)}
            type="text"
            style={{ width: "300px" }}
          ></input>
          <button className="btn btn-primary" onClick={searchWithEmail}>
            Buscar
          </button>
          <hr />
          <form>
            {((_employeone==null)?(<label style={{color:"red"}}>Correo NO encontrado❌</label>):(<label style={{color:"green"}}>Correo encontrado✅</label>))}
            <br/>
            <label>Nombre</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              disabled
              value={(_employeone==null)?fullName:_employeone.fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            Email
            <input
              type="text"
              className="form-control"
              name="email"
              value={(_employeone==null)?email:_employeone.email}
              disabled
              onChange={(e) => setEmail(e.target.value)}
            />
            <p style={{color:"blue"}}>Servicios que tienes:{(_employeone==null)?"":_employeone.services}</p>
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
  return bindActionCreators(
    { employeEditAction, onlyEmployeEmailAction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployeEmail);
//export default EditEmploye;
