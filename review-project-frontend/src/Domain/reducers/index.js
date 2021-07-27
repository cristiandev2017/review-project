import {combineReducers} from "redux";
import employesReducer from './employesReducer';
import clientsReducer from './clientsReducer';

const reducer = combineReducers({
    employesReducer:employesReducer,
    clientsReducer:clientsReducer
});


export default reducer;