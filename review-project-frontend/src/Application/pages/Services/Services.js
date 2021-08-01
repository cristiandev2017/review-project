import React, { useEffect, useState } from "react";
//Modal
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

//Redux
//import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getServices } from "../../../Domain/selectors/service";
import {
  listServicesAction,
  deleteServiceAction,
  serviceEditAction
} from "../../../Domain/actions/serviceActions.js";
//import { withRouter } from "react-router-dom";

function Services({
  services,
  listServicesAction,
  deleteServiceAction,
  serviceEditAction
}) {

  const [stateModal, setStateModal] = useState(false);
  const [name,setName] = useState('');
  const [value,setValue] = useState('');

  useEffect(() => {
    const listServices = () => listServicesAction();
    listServices();
  }, [listServicesAction]);

  const deleteService = (name) => {
    deleteServiceAction(name);
  };

  const editServiceact = (service) =>serviceEditAction(service);
  
  const editService = () =>{
    editServiceact({
      name,
      value
    })
    setStateModal(false);
  }
  
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
                <button  onClick={() => {setStateModal(true); setName(service.name); setValue(service.value)}} className="btn btn-warning">Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       <Modal isOpen={stateModal}>
                <ModalHeader>
                    Editar Servicio
                </ModalHeader>
                <ModalBody>
                  <form>
                    <label>Nombre</label>
                    <input className="form-control" value={name} disabled></input>
                    <label>Precio</label>
                    <input className="form-control" value={value} onChange={(e) => setValue(e.target.value)}></input>
                    <hr/>
                    <center>
                     <Button onClick={() => editService()} color="primary">Confirmar</Button>
                     <Button  onClick={() => { setStateModal(false) }}>Cerrar</Button>
                    </center> 
                </form>
                 </ModalBody>
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
    { listServicesAction, deleteServiceAction, serviceEditAction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
