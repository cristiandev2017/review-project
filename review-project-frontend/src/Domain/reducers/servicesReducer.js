//Constante
import { serviceConstants } from '../types/service';

//Creamos el estado inicial
const initialState = {
    services:[],
    error:null,
    loading:false,
    serviceone:{},
}


const servicesReducer =(state=initialState, action) =>{
    switch (action.type) {
        case serviceConstants.ADD_SERVICE:
            return {
             ...state,
            loading:true
            }
        case serviceConstants.ADD_SERVICE_SUCCESS:
            return{
                ...state,
                loading:false,
                services: [...state.services, action.payload]
            }
        case serviceConstants.ADD_SERVICE_FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case serviceConstants.LIST_SERVICES_SUCCESS:
            return{
                ...state,
                loading:false,
                services: action.payload
            }
        case serviceConstants.LIST_SERVICES_FAILURE:
            return{
             ...state,
             loading:false,
             error: action.payload
            }
        case serviceConstants.DELETE_SERVICE:
            return{
            ...state,
            loading: true
            }
        case serviceConstants.DELETE_SERVICE_SUCCESS:
            return{
            ...state,
            error: action.payload
            }
        case serviceConstants.DELETE_SERVICE_FAILURE:
            return{
            ...state,
            loading: false,
            error: action.payload
            }
        case serviceConstants.EDIT_SERVICE:
            return{
            ...state,
            loading: action.payload
            }
        case serviceConstants.ONLY_SERVICE:
            return{
            ...state,
            serviceone:action.payload
            }
        default:
            return state;
    }
}

export default servicesReducer;