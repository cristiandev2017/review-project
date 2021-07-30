//Constantes
import { serviceConstants } from '../types/service';

//import Servicios;
import clientAxios from '../../Infrastructure/services/api/axios';


//Crear Acciones de servicios
export function addNewServiceAction(service){
    return async (dispatch) =>{
        dispatch(addService());
        try {
            //Peticion a la base de datos
            await clientAxios.post('/create-service',service);
            //Si todo sale bien 
            dispatch(addServiceSuccess(service));
            alert("Se ha creado correctamente");
        } catch (error) {
            dispatch(addServiceFailure(true));
        }
    }
}

const addService = () =>({
    type:serviceConstants.ADD_SERVICE,
    payload:true
})

const addServiceSuccess = (service) =>({
    type:serviceConstants.ADD_SERVICE_SUCCESS,
    payload:service
});

const addServiceFailure = (error) =>({
    type:serviceConstants.ADD_SERVICE_FAILURE,
    payload:error
});

//Listar servicios
export function listServicesAction(){
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

const listServiceSuccess = (services) =>({
    type:serviceConstants.LIST_SERVICES_SUCCESS,
    payload:services
})

const listServiceFailure = () =>({
    type:serviceConstants.LIST_SERVICES_FAILURE,
    payload:true
})

//Eliminar empleados
export function deleteServiceAction(email){
    return async (dispatch) =>{
        let body = {email:email}
        try{
            await clientAxios.delete('/delete-service/',{data:body});
            dispatch(deleteServiceSuccess())
            alert("Se ha eliminado correctamente");
        }catch(error){
            dispatch(deleteServiceFailure());
        }
    }
}


const deleteServiceSuccess = () => ({
    type:serviceConstants.DELETE_SERVICE_SUCCESS,
    payload:'Se ha eliminado'
})

const deleteServiceFailure = () => ({
    type:serviceConstants.DELETE_SERVICE_FAILURE,
    payload:true
})

export function onlyServiceAction(client){
    return (dispatch) =>{
        dispatch(onlyService(client))
    }
}

const onlyService = service =>({
    type:serviceConstants.ONLY_CLIENT,
    payload:service
})



