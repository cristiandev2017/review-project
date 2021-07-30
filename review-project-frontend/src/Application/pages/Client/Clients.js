import React, { useEffect } from "react";
//import { useSelector, useDispatch } from "react-redux";
//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getClients} from "../../../Domain/selectors/user"
import "./static/style.css";
import Moment from 'moment';

import {
  deleteClientAction,
  listClientsAction,
} from "../../../Domain/actions/clientActions.js";


const Clients = ({clients,deleteClientAction,listClientsAction}) => {

  useEffect(() => {
    const listClients = () => listClientsAction();
    listClients();
  }, []);

  
  const deleteClient = (email) => {
    deleteClientAction(email);
    setTimeout(() => {
      listClientsAction();
    }, 2000);
  };


  return (
     <div>
      <h1 className="text-center">Administra tus Clientes</h1>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Imagen</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">PhoneNumber</th>
      <th scope="col">Birthday</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {clients.map((client,index)=>(
    <tr key={client._id}>
      <th scope="row">{index + 1}</th>
      <td><img className="img-st" src={client.photoURL}/></td>
      <td>{client.fullName}</td>
      <td>{client.email}</td>
      <td>{client.phoneNumber}</td>
      <td>{Moment(client.birthday).format('DD-MM-YYYY')}</td>
      <td><button className="btn btn-danger" onClick={() => deleteClient(client.email)}>Eliminar</button></td>
    </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    clients: getClients(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ listClientsAction,deleteClientAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);

