import React, { useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { listEmployesAction } from "../../Domain/actions/employeActions";
import { deleteEmployeAction } from './../../Domain/actions/employeActions';

function Employes() {
  const dispatch = useDispatch();

  useEffect(() => {
    const listEmployes = () => dispatch(listEmployesAction());
    listEmployes();
  }, []);

    const deleteEmploye = (id) => {
        dispatch(deleteEmployeAction(id));
        setTimeout(() => {
            window.location.reload(true);
        }, 2000);
    }

  //Traemos los datos
  const employes = useSelector((state) => state.employesReducer.employes);
  console.log("Empleados", employes);

  return (
    <div>
      <h1>List Employes</h1>
      <ul>
        {employes.map((employe) => (
          <li>
            {employe.name}  <button onClick={() => deleteEmploye(employe.id)}>Eliminar</button><button>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employes;
