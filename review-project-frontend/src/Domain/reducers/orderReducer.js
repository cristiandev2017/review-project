//Constante
import {orderConstants} from '../types/order'
//import { orderConstants } from './../types/order';

//Creamos el estado inicial
const initialState = {
    ordersuser:[],
    order:null,
    error:null,
    loading:false,
    orderscitas:[],
    order:[],
    citas:[]
}


const ordersReducer =(state=initialState, action) =>{
    switch (action.type) {
        case orderConstants.ADD_ORDER_SUCCESS:
            return{
                ...state,
                loading:false,
                order:action.payload
            }
        case orderConstants.ADD_ORDER_FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case orderConstants.LIST_ORDER_CLIENT_SUCCESS:
            return{
                ...state,
                loading:false,
               ordersuser: [...state.ordersuser, action.payload]
            }
        case orderConstants.LIST_ORDER_CLIENT_FAILURE:
            return{
             ...state,
             loading:false,
             error: action.payload
            }
        case orderConstants.LIST_ORDER_CITAS_SUCCESS:
            return{
            ...state,
            orderscitas: [...state.orderscitas, action.payload]
            }
        case orderConstants.LIST_ORDER_CITAS_FAILURE:
            return{
            ...state,
            error: action.payload
            }
        case orderConstants.DELETE_CITA:
            return{
            ...state,
            loading: false,
            }
        case orderConstants.DELETE_CITA_FAILURE:
            return{
            ...state,
            error: action.payload
            }
        case "ADD_CITA_SUCCESS":
            return{
            ...state,
            citas: [...state.citas, action.payload]
            }
        case orderConstants.ADD_CITA_FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default ordersReducer;