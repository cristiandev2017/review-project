import React, { useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  listEmployesAction,
  deleteEmployeAction,
  employeEditAction
} from "../../../Domain/actions/employeActions.js";
import "./static/style.css";


function Employes() {
  const dispatch = useDispatch();

  useEffect(() => {
    const listEmployes = () => dispatch(listEmployesAction());
    listEmployes();
  }, [dispatch]);

  
  const deleteEmploye = (email) => {
    dispatch(deleteEmployeAction(email));
    setTimeout(() => {
      dispatch(listEmployesAction());
    }, 2000);
    //
  };

   const employeEdit= async (employe) =>{
    console.log("algo");
    dispatch(await employeEditAction(employe.id, "Cristian Quiñones", employe.phone, employe.email,employe.specialty,employe.role))
   }

  //Traemos los datos
  const employes = useSelector((state) => state.employesReducer.employes);  
  return (
    <div>
      <h1 className="text-center">Administra tus Empleados</h1>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Imagen</th>
      <th scope="col">Email</th>
      <th scope="col">Servicios</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {employes.map((employe,index)=>(
    <tr key={employe.id}>
      <th scope="row">{index + 1}</th>
      <td>{employe.fullName}</td>
      <td><img className="img-p" src="https://recursos.bps.com.es/files/680/75.jpg"/></td>
      <td>{employe.email}</td>
      <td>{employe.services.map((service)=>(
          <li>{service}</li>
        ))}</td>
      <td><button className="btn btn-danger" onClick={() => deleteEmploye(employe.email)}>Eliminar</button><button className="btn btn-warning" onClick={() =>employeEdit(employe)}>Editar</button></td>
    </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}

export default Employes;
