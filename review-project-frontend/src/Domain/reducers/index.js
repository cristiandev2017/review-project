import {combineReducers} from "redux";
import employesReducer from './employesReducer';
import clientsReducer from './clientsReducer';
import servicesReducer from './servicesReducer';
import ordersReducer from './orderReducer';

const reducer = combineReducers({
    employesReducer:employesReducer,
    clientsReducer:clientsReducer,
    servicesReducer:servicesReducer,
    ordersReducer:ordersReducer,
});


export default reducer;