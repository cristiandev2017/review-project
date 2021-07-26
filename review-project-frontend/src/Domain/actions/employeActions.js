import {
    //ADD
    ADD_EMPLOYE,
    ADD_EMPLOYE_FAILURE,
    ADD_EMPLOYE_SUCCESS,
    //LIST
    LIST_EMPLOYES,
    LIST_EMPLOYES_SUCCESS,
    LIST_EMPLOYES_FAILURE,
    //DELETE
    DELETE_EMPLOYE,
    DELETE_EMPLOYE_SUCCESS,
    DELETE_EMPLOYE_FAILURE,
    //READ
    ONLY_EMPLOYE,
    EDIT_EMPLOYE,
} from '../types/employe.js';

import axios from 'axios';

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

//Eliminar empleados
export function deleteEmployeAction(id){
    return async (dispatch) =>{
        dispatch(deleteEmploye());
        try{
            await clientAxios.delete('/employes/'+id);
            dispatch(deleteEmployeSuccess())
            alert("Se ha eliminado correctamente");
        }catch(error){
            dispatch(deleteEmployeFailure);
        }
    }
}

const deleteEmploye = () =>({
    type:DELETE_EMPLOYE,
    payload:true
})

const deleteEmployeSuccess = () => ({
    type:DELETE_EMPLOYE_SUCCESS,
    payload:'Se ha eliminado'
})

const deleteEmployeFailure = () => ({
    type:DELETE_EMPLOYE_FAILURE,
    payload:true
})

export function onlyEmployeAction(employe){
    return (dispatch) =>{
        dispatch(onlyEmploye(employe))
    }
}

const onlyEmploye = employe =>({
    type:ONLY_EMPLOYE,
    payload:employe
})

export const employeEditAction =async (id,name, phone, email,specialty,role) => {
    return async (dispatch) =>{
    dispatch(editEmploye())
    const employe = {name:name, phone:phone, email:email, specialty: specialty,role:role}
    const response = await clientAxios.put('/employes/'+id,employe);
    }
}

const editEmploye = ()=>({
    type:EDIT_EMPLOYE,
    payload:true
});