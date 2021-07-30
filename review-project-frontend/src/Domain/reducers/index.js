import {combineReducers} from "redux";
import employesReducer from './employesReducer';
import clientsReducer from './clientsReducer';
import servicesReducer from './servicesReducer';

const reducer = combineReducers({
    employesReducer:employesReducer,
    clientsReducer:clientsReducer,
    servicesReducer:servicesReducer
});


export default reducer;