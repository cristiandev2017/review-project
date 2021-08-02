//Constantes
import {orderConstants} from '../types/order';
//import { orderConstants } from './../types/order';
import clientAxios from '../../Infrastructure/services/api/axios';

//Acciones para la orden
export function addOrderServiceAction(orders){
    return async (dispatch) =>{
        try {
            await clientAxios.post('/place-order',orders);
            alert("Se ha creado correctamene");
            dispatch(addOrder(orders));    
        } catch (error) {
            dispatch(addOrderFailure());
        }
    }
}

const addOrder = (order) =>({
type:orderConstants.ADD_ORDER_SUCCESS,
payload:order
});

const addOrderFailure = () =>({
type:orderConstants.ADD_ORDER_FAILURE,
payload:"Se ha generado un error"
});

export function listOrderUserAction(id){
    return async (dispatch) =>{
        try {
            const response = await clientAxios.get('/get-orders-by-client?clientid='+id); 
            dispatch(listOrderuser(response));
        } catch (error) {
            dispatch(listOrderuserfailure());
        }
    }
}

const listOrderuser = (ordersuser) =>({
    type:orderConstants.LIST_ORDER_CLIENT_SUCCESS,
    payload:ordersuser
})

const listOrderuserfailure = () =>({
    type:orderConstants.LIST_ORDER_CLIENT_FAILURE,
    payload:"Ha ocurrido un error"
})

export function listOrderCitasAction(id){
    return async (dispatch) =>{
        try {
            const response = await clientAxios.get('/pendding?orderid='+id); 
            dispatch(listOrdercitas(response));
        } catch (error) {
            dispatch(listOrdercitasfailure());
        }
    }
}

const listOrdercitas = (orderscitas) =>({
    type:orderConstants.LIST_ORDER_CITAS_SUCCESS,
    payload:orderscitas
})

const listOrdercitasfailure = () =>({
    type:orderConstants.LIST_ORDER_CITAS_FAILURE,
    payload:"Ha ocurrido un error"
})

export function deleteCitaAction(param){
    return async (dispatch)=>{
        let body = {param:param}
        try {
            const response = await clientAxios.delete('cancel-appointment',{data:body})
              dispatch(deletecitaSuccess())
        } catch (error) {
          dispatch(deletecitaFailure())
        }
    }
}

const deletecitaSuccess=() =>({
    type:orderConstants.DELETE_CITA,
    payload:"ocurrio algo"
})


const deletecitaFailure=() =>({
    type:orderConstants.DELETE_CITA_FAILURE,
    payload:"Ha ocurrido un error"
})

//Acciones para la orden
export function addCitaAction(cita){
    return (dispatch) =>{
        try {
            //const response = await clientAxios.post('/schedule-appointment',cita);
            alert("Se ha creado correctamene");
            dispatch(addCita(cita));    
        } catch (error) {
            dispatch(addCitaFailure());
        }
    }
}

const addCita=(cita) =>({
 type:"ADD_CITA_SUCCESS",
 payload:cita
})

const addCitaFailure=() =>({
 type:orderConstants.ADD_CITA_FAILURE,
 payload:"se ha generado un error"
})

export function addOrdertemp(order){
    return async (dispatch) =>{
        try {
            alert("Se ha creado el carrito");
            dispatch(addCarrito(order));    
        } catch (error) {
            console.log(error)
        }
    }
}

const addCarrito = (order) =>({
    type:orderConstants.ADD_CARRITO,
    payload:order
})