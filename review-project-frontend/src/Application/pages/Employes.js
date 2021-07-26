import React, { useEffect, useState } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  listEmployesAction,
  deleteEmployeAction,
  onlyEmployeAction,
  employeEditAction
} from "../../Domain/actions/employeActions";

function Employes() {
  const dispatch = useDispatch();

  useEffect(() => {
    const listEmployes = () => dispatch(listEmployesAction());
    listEmployes();
  }, []);

  const deleteEmploye = (id) => {
    dispatch(deleteEmployeAction(id));
    dispatch(listEmployesAction());
  };

  const [pruebam, setpruebam] = useState([]);

  const employeone = (employe) => {
    dispatch(onlyEmployeAction(employe));
    console.log("Todo el objeto seleccionado", employe);
    setpruebam([employe.name, employe.phone]);
    //document.getElementById('verEmpleado').innerHTML = `<li style="color:red">${employe.name}</li><li style="color:red">${employe.phone}</li>`;
  };
   
   const employeEdit= async (employe) =>{
    console.log("algo");
    dispatch(await employeEditAction(employe.id, "Cristian Quiñones", employe.phone, employe.email,employe.specialty,employe.role))
   }

  //Traemos los datos
  const employes = useSelector((state) => state.employesReducer.employes);
    
  return (
    <div>
      <h1>List Employes</h1>
      <ul>
        {employes.map((employe) => (
          <li key={employe.id}>
            {employe.name}{" "}
            <button onClick={() => deleteEmploye(employe.id)}>Eliminar</button>
            <button onClick={() => employeone(employe)}>Ver</button>
            <button onClick={() =>employeEdit(employe)}>Edit</button>
          </li>
        ))}
      </ul>
        <div id="verEmpleado">
          <h1>{pruebam}</h1>
        </div>
    </div>
  );
}

export default Employes;
