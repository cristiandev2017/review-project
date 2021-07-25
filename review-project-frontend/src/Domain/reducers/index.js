import {combineReducers} from "redux";
import employesReducer from './employesReducer';

export default combineReducers({
    employes:employesReducer
});


