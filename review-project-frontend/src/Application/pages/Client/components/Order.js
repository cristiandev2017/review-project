import React, { useState, Fragment } from "react";
import AppointmentCard from "./AppointmentCard";

//Modal
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCitas } from "./../../../../Domain/selectors/order";
//Actions
import { addCitaAction } from "../../../../Domain/actions/orderAction.js";

function AppointmentsManager({ citas, addCitaAction }) {
  //Inicializo mis campos
  const [stateModal, setStateModal] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  //Ejecuto la accion
  const addCitaSt = () => {
    const cita = { name, date };
    addCitaAction(cita);
  };

  console.log("Lo que trae primer  aa", citas);

  return (
    <Fragment>
      <div className="my-3 p-4 text-center">
        <div className="container align-items-center my-3 border rounded border-dark">
          <h1 className="py-2">Orden</h1>
          <button
            onClick={() => {
              setStateModal(true);
            }}
            className="btn btn-success my-4 border rounded"
          >
            AGREGAR CITA
          </button>
          {citas == 0 ? (
            <h6>Aun no tiene citas agendadas</h6>
          ) : (
            citas.map(cita => {
              return <AppointmentCard cita={cita}/> 
            })
          )}
        </div>
      </div>
      <Modal isOpen={stateModal}>
        <ModalHeader>Agendar Cita</ModalHeader>
        <ModalBody>
          <label>Seleccione el servicio</label>
          <select 
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            >
            <option>Corte de cabello</option>
            <option>Corte de Barba</option>
            <option>Manicure</option>
            <option>Pedicure</option>
          </select>
          <label>Seleccione la fecha</label>
          <input
            type="date"
            name="date"
            value={date}
            className="form-control"
            onChange={(e) => setDate(e.target.value)}
          ></input>
          <hr />
          <center>
            <Button onClick={() => addCitaSt()} color="primary">
              Confirmar
            </Button>
            <Button
              onClick={() => {
                setStateModal(false);
              }}
            >
              Cerrar
            </Button>
          </center>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    citas: getCitas(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addCitaAction }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentsManager);
//export default AppointmentsManager;
