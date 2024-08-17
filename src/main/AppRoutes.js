import React from "react";
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

import HomePage from "../screens/HomePage/HomePage";
import Login from "../screens/Login/Login";

import { AuthConsumer } from "./SessionProvider";
import SchoolYear from "../screens/SchoolYear/SchoolYear";

function RestrictedRoute( {component: Component, show, ...props} ) {
    return(
        <Route exact {...props} render={ (componentProps) => {
            if(show){
                return (
                    <Component {...componentProps} />
                )
            }else{
                return(
                    <Redirect to={ {pathname : '/login', state : { from: componentProps.location}}} />
                )
            }
        }} />
    )

}

function AppRoutes(props) {
    return (

        <BrowserRouter>
            <Switch>

            <Route component = { HomePage } path="/" exact/>
            <Route path="/login">
                {props.isAuthenticated ? (
                <Redirect to="/" />
                ) : (
                 <Login />
                )}
            </Route>
            


            <RestrictedRoute show={props.isAuthenticated} component = { SchoolYear } path= "/school-year" />
            

            </Switch>
        </BrowserRouter>
        
    );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <AuthConsumer>
        { (context) => (<AppRoutes isAuthenticated={context.isAuthenticated} />) }
    </AuthConsumer>
)