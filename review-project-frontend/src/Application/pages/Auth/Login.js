import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginClientAction } from "./../../../Domain/actions/clientActions";
import { withRouter } from "react-router-dom";

const Login = ({ loginClientAction, history }) => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [birthday, setbirthday] = useState("");
  //const dispatch = useDispatch();

  const handleGoogleAuth = () => {
    loginClientAction(phoneNumber, birthday);
    //history.push('/test');
  };

  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <center>
            <h1>Login/Registro</h1>
            <hr/>
            <h5>Por favor digite su numero de telefono:</h5>
            <input
              className="form-control"
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
            ></input>
            <h5>Por favor digite su fecha de cumpleaños:</h5>
            <input
              className="form-control"
              type="date"
              name="birthday"
              value={birthday}
              onChange={(e) => setbirthday(e.target.value)}
            ></input>
            <hr></hr>
            <button className="btn btn-outline-danger btn-block" onClick={handleGoogleAuth}>Autenticar con Google</button>
          </center>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginClientAction }, dispatch);
};

export default connect(null, mapDispatchToProps)(withRouter(Login));
