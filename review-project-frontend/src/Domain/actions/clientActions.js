//Constantes
import { clientConstants } from './../types/client';

//import Servicios;
import clientAxios from './../../Infrastructure/services/api/axios';
import {signInWithGoogle} from '../../Infrastructure/services/firebase/auth';
import getUser from '../../Infrastructure/services/firebase/user/index'



//Crear Acciones de clientes
export function addNewClientAction(client){
    return async (dispatch) =>{
        dispatch(addClient());
        console.log("Llegue a la action");
        try {
            console.log("entre al dispatch dentro del action")
            //Peticion a la base de datos
            await clientAxios.post('/clients',client);
            //Si todo sale bien 
            dispatch(addClientSuccess(client));
            alert("Se ha creado correctamente");
        } catch (error) {
            dispatch(addClientFailure(true));
        }
    }
}

const addClient = () =>({
    type:clientConstants.ADD_CLIENT,
    payload:true
})

const addClientSuccess = (client) =>({
    type:clientConstants.ADD_CLIENT_SUCCESS,
    payload:client
});

const addClientFailure = (error) =>({
    type:clientConstants.ADD_CLIENT_FAILURE,
    payload:error
});

//Listar clientes
export function listClientsAction(){
    return async(dispatch) =>{
        try{
            //Hago mi peticion HTTP
            const response = await clientAxios.get('/clients');
            dispatch(listClientSuccess(response.data));

        }catch(error){
            dispatch(listClientFailure());
        }
    }
}

const listClientSuccess = (clients) =>({
    type:clientConstants.LIST_CLIENTS_SUCCESS,
    payload:clients
})

const listClientFailure = () =>({
    type:clientConstants.LIST_CLIENTS_FAILURE,
    payload:true
})

//Eliminar empleados
export function deleteClientAction(id){
    return async (dispatch) =>{
        try{
            await clientAxios.delete('/clients/'+id);
            dispatch(deleteClientsSuccess())
            alert("Se ha eliminado correctamente");
        }catch(error){
            dispatch(deleteClientsFailure());
        }
    }
}


const deleteClientsSuccess = () => ({
    type:clientConstants.DELETE_CLIENT_SUCCESS,
    payload:'Se ha eliminado'
})

const deleteClientsFailure = () => ({
    type:clientConstants.DELETE_CLIENT_FAILURE,
    payload:true
})

export function onlyClientAction(client){
    return (dispatch) =>{
        dispatch(onlyClient(client))
    }
}

const onlyClient = client =>({
    type:clientConstants.ONLY_CLIENT,
    payload:client
})

//Login
export const loginClientAction = (phoneNumber,birthday) =>{
    return (dispatch) =>{
        signInWithGoogle().then(r => {
        dispatch(currentuser(phoneNumber,birthday));
        }).catch(error => {
            console.log(error)
        })
        dispatch({type:clientConstants.LOGIN,
        payload:"Se logeo"});
    }
}

export const currentuser = (phoneNumber,birthday) => {
    return async(dispatch) =>{
        const client =getUser();
        //Para mi estado 
        //Para la base de datos
        const userdata = {
            fullName:client.userName,
            photoURL:client.photoURL,
            email:client.userEmail,
            phoneNumber:phoneNumber,
            birthday:birthday
        }
        const responsecl = await clientAxios.post('/register-client',userdata);
        //Para mi estado
        const userstate = {        
            id:responsecl._id,
            fullName:responsecl.fullName,
            photoURL:responsecl.photoURL,
            phoneNumber:responsecl.phoneNumber,
            birthday:birthday,
            autenticado:true
        } 
        dispatch({type:clientConstants.CREATE_LOGIN_USER,payload:userstate});
        //window.location.href="/test"
    }
}

