import {
    ADD_EMPLOYE,
    ADD_EMPLOYE_FAILURE,
    ADD_EMPLOYE_SUCCESS
} from '../types/employe.js';

import clientAxios from './../../Infrastructure/services/api/axios';

//Crear Acciones de Empleados
export function addNewEmployeAction(employe){
    return async (dispatch) =>{
        dispatch(addEmploye())
        try {
            //Peticion a la base de datos
            await clientAxios.post('employes',employe);
            //Si todo sale bien 
            dispatch(addEmployeSuccess(employe));
            alert("Se ha creado correctamente");
        } catch (error) {
            dispatch(addEmployeFailure(true));
        }
    }
}

const addEmploye = () =>({
    type: ADD_EMPLOYE,
    payload: true
});

const addEmployeSuccess = (employe) =>({
    type:ADD_EMPLOYE_SUCCESS,
    payload:employe
});

const addEmployeFailure = (error) =>({
    type:ADD_EMPLOYE_FAILURE,
    payload:error
});

