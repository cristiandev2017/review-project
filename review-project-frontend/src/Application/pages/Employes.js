import React, {useEffect} from 'react';

//Redux
import {useSelector, useDispatch} from "react-redux";
import {listEmployesAction} from "../../Domain/actions/employeActions";


function Employes() {
    
    const dispatch = useDispatch();

    useEffect(()=>{
        const listEmployes = () => dispatch(listEmployesAction());
        listEmployes();

    }, []);

    //Traemos los datos
    const employes = useSelector((state) => state.employesReducer.employes);
    console.log("Empleados", employes);

    return (
        <div>
            <h1>List Employes</h1>
            <ul>
              {employes.map((employe) =>(
                    <li>{employe.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Employes
