import React from 'react'
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({component: Component, authenticated, ...rest}) => {
    console.log("Private",authenticated)
    return (
        <Route {...rest} render={(props) =>
            authenticated === true ? (<Component {...props} />) : (
                <Redirect to={{pathname: '/', state: {from: props.location}}}/>)}
        />
    )
}
export const PublicRoute = ({component: Component, authenticated, ...rest}) => {
    return (
        <Route{...rest} render={(props) => authenticated === false ? <Component {...props} /> : <Redirect to="/citas"/>}
        />
    );
}