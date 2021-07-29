//Constante
import { clientConstants} from './../types/client';

//Creamos el estado inicial
const initialState = {
    clients:[],
    error:null,
    loading:false,
    clientone:{
            id:"",
            name:"",
            email:"",
            photoURL:"",
            phone:"",
            birthday:"",
            autenticado:false},
}


const clientsReducer =(state=initialState, action) =>{
    switch (action.type) {
        case clientConstants.ADD_CLIENT:
            return {
             ...state,
            loading:true
            }
        case clientConstants.ADD_CLIENT_SUCCESS:
            return{
                ...state,
                loading:false,
                clients: [...state.clients, action.payload]
            }
        case clientConstants.ADD_CLIENT_FAILURE:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case clientConstants.LIST_CLIENTS_SUCCESS:
            return{
                ...state,
                loading:false,
                clients: action.payload
            }
        case clientConstants.LIST_CLIENTS_FAILURE:
            return{
             ...state,
             loading:false,
             error: action.payload
            }
        case clientConstants.DELETE_CLIENT:
            return{
            ...state,
            loading: true
            }
        case clientConstants.DELETE_CLIENT_SUCCESS:
            return{
            ...state,
            loading: action.payload
            }
        case clientConstants.DELETE_CLIENT_FAILURE:
            return{
            ...state,
            loading: false,
            error: action.payload
            }
        case clientConstants.ONLY_CLIENT:
            return{
            ...state,
            clientone:action.payload
            }
        case clientConstants.LOGIN:
            return{
            ...state,
            error:action.payload
            }
        case clientConstants.CREATE_LOGIN_USER:
           return{
           ...state,
           clientone:action.payload
        }
        case clientConstants.LOGOUT:
            return{
            ...state,
            error:action.payload
            }
        default:
            return state;
    }
}

export default clientsReducer;