import React, { useEffect, useState } from "react";
//Modal
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

//Redux
//import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getServices } from "../../../Domain/selectors/service";
import {
  listServicesAction,
  deleteServiceAction,
  onlyServiceAction,
} from "../../../Domain/actions/serviceActions.js";
import { withRouter } from "react-router-dom";

function Services({
  services,
  listServicesAction,
  deleteServiceAction,
  history,
}) {

  const [estadoModal, setestadoModal] = useState(true)

  useEffect(() => {
    const listServices = () => listServicesAction();
    listServices();
  }, [listServicesAction]);

  const deleteService = (name) => {
    deleteServiceAction(name);
  };

  return (
    <div>
      <h1 className="text-center mt-4">Administra tus Servicios</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">EmpleadoID</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={service._id}>
              <th scope="row">{index + 1}</th>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>{service.value}</td>
              <td>{service.employeeID}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteService(service.name)}
                >
                  Eliminar
                </button>
                <button className="btn btn-warning">Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       <Modal isOpen={estadoModal}>
                <ModalHeader>
                    Editar Servicio
                </ModalHeader>
                <ModalBody>
                  <form>
                    <label>Nombre</label>
                    <input className="form-control"></input>
                    <label>Precio</label>
                    <input className="form-control"></input>
                    <button className="btn btn-primary">Agregar</button>
                  </form>
                 </ModalBody>
                <ModalFooter>
                    <Button>Confirmar</Button>
                    <Button  onClick={() => { setestadoModal(false) }}>Cerrar</Button>
                </ModalFooter>
            </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    services: getServices(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { listServicesAction, deleteServiceAction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
