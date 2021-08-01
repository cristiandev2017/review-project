import servicesReducer from "../../../Domain/reducers/servicesReducer";
import {
    addService,
    addServiceSuccess,
    addServiceFailure
} from "../../../Domain/actions/serviceActions.js"

describe('test reducer service', () =>{

    const dummyService ={
      name:"Servicio1",
      description:"Description servicio1",
      value:1000,
      employeeID:"11"
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

})