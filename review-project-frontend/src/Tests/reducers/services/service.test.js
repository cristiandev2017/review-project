import servicesReducer from "../../../Domain/reducers/servicesReducer";
import {
    addService,
    addServiceSuccess,
    addServiceFailure,
    listServiceSuccess,
    listServiceFailure,
    deleteServiceSuccess,
    deleteServiceFailure,
    editService
} from "../../../Domain/actions/serviceActions.js"

describe('test reducer service', () =>{

    const dummyService ={
      name:"Servicio1",
      description:"Description servicio1",
      value:1000,
      employeeID:"11"
    }

    const dummylistService = [
    {
    _id:"2332",
    name:"Corte de pelo",
    description:"para hombres",
    value:77000,
    employeeID:"esto es un id",
    __v:0
    },
    {
    _id:"2334",
    name:"Corte de cabello",
    description:"para mujeres",
    value:78000,
    employeeID:"esto es un id",
    __v:1
    }]
    
    const dummyEditService={
        name:"manicure",
        value:"14200"
    }

    const initialState = {
    services:[],
    error:null,
    loading:false,
    serviceone:{},
    }


  test('reducer ADD SERVICE', () => {
        const action = addService();
        const state = servicesReducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading:true });
    });

  test('reducer ADD SERVICE SUCCESS', () =>{
     const action = addServiceSuccess(dummyService);
        const state = servicesReducer(initialState, action);
        expect(state).toEqual({ ...initialState, loading:false, services:[...initialState.services,dummyService] });
   });

    test('reducer ADD SERVICE FAILURE', () =>{
     const action = addServiceFailure("No se pudo guardar servicio");
     const state = servicesReducer(initialState, action);
     expect(state).toEqual({ ...initialState, loading:false,error:"No se pudo guardar servicio"});
   });

    test('reducer LIST SERVICE SUCCESS', () =>{
     const action = listServiceSuccess(dummylistService);
     const state = servicesReducer(initialState, action);
     expect(state).toEqual({ ...initialState, loading:false,services:dummylistService});
   });

    test('reducer LIST SERVICE FAILURE', () =>{
     const action = listServiceFailure();
     const state = servicesReducer(initialState, action);
     expect(state).toEqual({ ...initialState, loading:false,error:true});
   });

    test('reducer DELETE SERVICE SUCESS', () =>{
     const action = deleteServiceSuccess();
     const state = servicesReducer(initialState, action);
     expect(state).toEqual({ ...initialState, error:"Se ha eliminado"});
   });

    test('reducer DELETE SERVICE ', () =>{
     const action = deleteServiceFailure();
     const state = servicesReducer(initialState, action);
     expect(state).toEqual({ ...initialState,loading: false, error:true});
    });

    test('reducer ONLY SERVICE ', () =>{
     const action = deleteServiceFailure();
     const state = servicesReducer(initialState, action);
     expect(state).toEqual({ ...initialState,loading: false, error:true});
    });

    test('reducer EDIT_SERVICE ', () =>{
     const action = editService(dummyEditService);
     const state = servicesReducer(initialState, action);
     expect(state).toEqual({ ...initialState,loading:true});
    });
})