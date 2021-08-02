import clientsReducer from "../../../Domain/reducers/clientsReducer";
import {
    listClientSuccess,
    listClientFailure,
    deleteClientsSuccess,
    deleteClientsFailure
} from "../../../Domain/actions/clientActions.js"

describe('test reducer client', () =>{
    const dummyListClient = [
    {
    _id:"1234",
    fullName:"Cristian Quinones",
    photoURL:"url.com",
    email:"correo@gmail.com",
    phoneNumber:"123456877",
    birthday:"2021-07-03T00:00:00.000+00:00",
    __v:0
    },
    {
    _id:"1234",
    fullName:"Cristian Quinones",
    photoURL:"url.com",
    email:"correo@gmail.com",
    phoneNumber:"123456877",
    birthday:"2021-07-03T00:00:00.000+00:00",
    __v:0
    }
   ]

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

    test('reducer LIST CLIENT SUCCESS', () =>{
     const action = listClientSuccess(dummyListClient);
     const state = clientsReducer(initialState, action);
     expect(state).toEqual({ ...initialState, loading:false,clients:dummyListClient});
    });

    test('reducer LIST CLIENT FAILURE', () =>{
     const action = listClientFailure();
     const state = clientsReducer(initialState, action);
     expect(state).toEqual({ ...initialState, loading:false,error:true});
    });

     test('reducer DELETE CLIENT SUCESS', () =>{
     const action = deleteClientsSuccess();
     const state = clientsReducer(initialState, action);
     expect(state).toEqual({ ...initialState, error:"Se ha eliminado"});
   });

    test('reducer DELETE CLIENT FAILURE', () =>{
     const action = deleteClientsFailure();
     const state = clientsReducer(initialState, action);
     expect(state).toEqual({ ...initialState, error:true});
   });
    
})