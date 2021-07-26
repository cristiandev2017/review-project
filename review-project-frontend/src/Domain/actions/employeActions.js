import {
    //ADD
    ADD_EMPLOYE,
    ADD_EMPLOYE_FAILURE,
    ADD_EMPLOYE_SUCCESS,
    //LIST
    LIST_EMPLOYES,
    LIST_EMPLOYES_SUCCESS,
    LIST_EMPLOYES_FAILURE
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

//Listar empleados
export function listEmployesAction(){
    return async(dispatch) =>{
        dispatch(listEmployes());
        try{
            //Hago mi peticion HTTP
            const response = await clientAxios.get('/employes');
            dispatch(listEmployesSuccess(response.data));

        }catch(error){
            dispatch(listEmployesFailure());
        }
    }
}

const listEmployes = () =>({
    type:LIST_EMPLOYES,
    payload:true
})

const listEmployesSuccess = (employes) =>({
    type:LIST_EMPLOYES_SUCCESS,
    payload:employes
})

const listEmployesFailure = () =>({
    type:LIST_EMPLOYES_FAILURE,
    payload:true
})