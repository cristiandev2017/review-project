//Constantes
import {
    ADD_EMPLOYE,
    ADD_EMPLOYE_FAILURE,
    ADD_EMPLOYE_SUCCESS,
    LIST_EMPLOYES,
    LIST_EMPLOYES_SUCCESS,
    LIST_EMPLOYES_FAILURE,
    DELETE_EMPLOYE,
    DELETE_EMPLOYE_SUCCESS,
    DELETE_EMPLOYE_FAILURE,
} from '../types/employe.js';

//Creamos el estado inicial
const initialState = {
    employes:[],
    error:null,
    loading:false
}

const employesReducer =(state=initialState, action) =>{
    switch (action.type) {
        case ADD_EMPLOYE:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_EMPLOYE_SUCCESS:
            return{
                ...state,
                loading:false,
                employes: [...state.employes, action.payload]
            }
        case ADD_EMPLOYE_FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case LIST_EMPLOYES:
            return{
                ...state,
                loading:action.payload
            }
        case LIST_EMPLOYES_SUCCESS:
            return{
                ...state,
                loading:false,
                employes: action.payload
            }
        case LIST_EMPLOYES_FAILURE:
            return{
             ...state,
             loading:false,
             error: action.payload
            }
        case DELETE_EMPLOYE:
            return{
            ...state,
            loading: true
            }
        case DELETE_EMPLOYE_SUCCESS:
            return{
            ...state,
            loading: false
            }
        case DELETE_EMPLOYE_FAILURE:
            return{
            ...state,
            loading: false,
            error: action.payload
            }
        default:
            return state;
    }
}

export default employesReducer;