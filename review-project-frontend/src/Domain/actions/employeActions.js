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

//Object Values
import Employee from './../aggregates/employee/employee';
import Fullname from './../aggregates/employee/values/fullName';
import PhotoURL from './../aggregates/employee/values/photoURL';
import Email from './../aggregates/employee/values/email';
import Services from './../aggregates/employee/values/services';

//import axios from 'axios';
import clientAxios from './../../Infrastructure/services/api/axios';


//Crear Acciones de Empleados
export function addNewEmployeAction(employe){
    const {fullName,photoURL,email,services} = employe;
    return async (dispatch) =>{
        dispatch(addEmploye())
        try {
            const employe = getEmploye(fullName,photoURL,email,services)
            //Peticion a la base de datos
            await clientAxios.post('create-employee',employe);
            //Si todo sale bien 
            dispatch(addEmployeSuccess(employe));
            alert("Se ha creado correctamente");
            setTimeout(() => {
                window.location.href="/admin-listemployes";
            },1000);
        } catch (error) {
            dispatch(addEmployeFailure(error.message));
            console.log("ERRPR",error.message);
        }
    }
}

function getEmploye(fullName,photoURL,email,services) {
    const newEmployee = new Employee (
        new Fullname(fullName),
        new PhotoURL(photoURL),
        new Email(email),
        new Services(services),
    )
    //DTO
    const employe = {
        fullName: newEmployee.fullName.fullName,
        photoURL: newEmployee.photoURL.photoURL,
        email: newEmployee.email.email,
        services:newEmployee.services.services
    }
    return employe;
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
            const response = await clientAxios.get('/get-employees');
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
export function deleteEmployeAction(email){
    return async (dispatch) =>{
        let body = {email:email}
        dispatch(deleteEmploye());
        try{
            const response = await clientAxios.delete('delete-employee',{data:body});
            dispatch(deleteEmployeSuccess())
            alert("Se ha eliminado correctamente");
            console.log("Haber que devuelve ",response);
        }catch(error){
            dispatch(deleteEmployeFailure);
            console.log("Persiste el error");
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

export function onlyEmployeEmailAction(employe){
    return () =>{
       try {
       return clientAxios.get('get-employee-by-email',employe); 
        //dispatch(onlyEmployeEmail(response))
       } catch (error) {
        console.log("ERROR");
       } 
    }
}

export const employeEditAction =(employe) => {
    return async (dispatch) =>{
    dispatch(editEmploye());
    const response =await clientAxios.put('update-employee',employe);
    console.log("Que esta devolviendo",response);
    }
}

const editEmploye = ()=>({
    type:EDIT_EMPLOYE,
    payload:true
});