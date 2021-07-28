import React, {useState} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { loginClientAction } from './../../../Domain/actions/clientActions';
import { withRouter } from "react-router-dom";


const Login = ({loginClientAction,history}) => {

    const [phoneNumber, setphoneNumber] = useState('');
    const [birthday, setbirthday] = useState('');
    //const dispatch = useDispatch();
    
    const handleGoogleAuth = () =>{
        loginClientAction(phoneNumber,birthday);        
        //history.push('/test');
    }

    return (
        <div>
           <h1>Login / Registro</h1> 
            phoneNumber
            <input type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            ></input>
            birthday
            <input type="date"
                name="birthday"
                value={birthday}
                onChange={(e)=>setbirthday(e.target.value)}></input>
            <button onClick={handleGoogleAuth}>Autenticar con Google</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginClientAction }, dispatch);
};

export default connect(null,mapDispatchToProps)(withRouter(Login));
