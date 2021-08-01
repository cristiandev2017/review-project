//Constantes
import { serviceConstants } from '../types/service';
//import Servicios;
import clientAxios from '../../Infrastructure/services/api/axios';
//Object values
import Service from './../aggregates/service/service';
import Name from './../aggregates/service/values/name';
import Description from './../aggregates/service/values/description';
import Value from './../aggregates/service/values/value';
import EmployeeID from '../aggregates/service/values/employeeID';


//Crear Acciones de servicios
export function addNewServiceAction(service){
    const {name,description,value,employeeID} = service;
    return async (dispatch) =>{
        dispatch(addService());
        try {
            const service = getService( name,description,value,employeeID);
            //Peticion a la base de datos
            await clientAxios.post('/create-service',service);
            //Si todo sale bien 
            dispatch(addServiceSuccess(service));
            alert("Se ha creado correctamente");
            setTimeout(() => {
                window.location.href="/admin";
            },1000);
        } catch (error) {
            dispatch(addServiceFailure(error.message));
        }
    }
}

function getService(name,description,value,employeeID) {
    const newService = new Service (
        new Name(name),
        new Description(description),
        new Value(parseFloat(value)),
        new EmployeeID(employeeID)
    )
    const service = {
        name: newService.name.name,
        description: newService.description.description,
        value: newService.value.value,
        employeeID:newService.employeeID.employeeID
    }
    return service;
}



export const addService = () =>({
    type:serviceConstants.ADD_SERVICE,
    payload:true
})

export const addServiceSuccess = (service) =>({
    type:serviceConstants.ADD_SERVICE_SUCCESS,
    payload:service
});

export const addServiceFailure = (error) =>({
    type:serviceConstants.ADD_SERVICE_FAILURE,
    payload:error
});

//Listar servicios
export function listServicesAction(){
    console.log("Ejecuta sss");
    return async(dispatch) =>{
        try{
            //Hago mi peticion HTTP
            const response = await clientAxios.get('/get-services');
            dispatch(listServiceSuccess(response.data));
        }catch(error){
            dispatch(listServiceFailure());
        }
    }
}

export const listServiceSuccess = (services) =>({
    type:serviceConstants.LIST_SERVICES_SUCCESS,
    payload:services
})

export const listServiceFailure = () =>({
    type:serviceConstants.LIST_SERVICES_FAILURE,
    payload:true
})

//Eliminar empleados
export function deleteServiceAction(name){
    return async (dispatch) =>{
        let body = {name:name}
        try{
            await clientAxios.delete('/delete-service/',{data:body});
            dispatch(deleteServiceSuccess())
            alert("Se ha eliminado correctamente");
            dispatch(listServicesAction())
        }catch(error){
            dispatch(deleteServiceFailure());
        }
    }
}

export const deleteServiceSuccess = () => ({
    type:serviceConstants.DELETE_SERVICE_SUCCESS,
    payload:'Se ha eliminado'
})

export const deleteServiceFailure = () => ({
    type:serviceConstants.DELETE_SERVICE_FAILURE,
    payload:true
})

export function onlyServiceAction(client){
    return (dispatch) =>{
        dispatch(onlyService(client))
    }
}

export const onlyService = service =>({
    type:serviceConstants.ONLY_CLIENT,
    payload:service
})

export const serviceEditAction= (service) =>{
    return async(dispatch)=>{
    dispatch(editService());
    dispatch(listServicesAction());
    const response = await clientAxios.put('update-service-value',service);
    console.log(response);
    }
}

export const editService = () => ({
    type:serviceConstants.EDIT_SERVICE,
    payload:true
})


