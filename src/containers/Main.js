// Main will be responsible for our routing logic
 import React from "react";
 import {Switch, Route, withRouter, Redirect} from "react-router-dom";
 import {connect} from "react-redux";
 import Homepage from "../components/Hompage";
 import AuthForm from "../components/AuthForm";
 import {authUser} from "../store/actions/auth";
 import {removeError} from "../store/actions/errors";

 // Switch component will allow for multiple routes and 404 logic
 const Main = props => {
     const {authUser, errors, removeError, currentUser} = props;

     return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props} />} />
                <Route exact path="/signin" render={props => {
                    return (
                        <AuthForm
                        removeError={removeError}
                        errors={errors}
                        onAuth={authUser}
                        buttonText="Log in" 
                        heading="Welcome Back" 
                        {...props}/>
                    )
                 }} 
                />
                <Route exact path="/signup" render={props => {
                    return (
                        <AuthForm 
                        removeError={removeError}
                        errors={errors}
                        signUp 
                        onAuth={authUser}
                        buttonText="Sign me up!" 
                        heading="Join Warbler today." 
                        {...props}/>
                    )
                }}  
                />
            </Switch>
        </div>
    );
 };

 function mapStateToProps(state) {
     return {
         currentUser: state.currentUser,
         errors: state.errors
     };
 }

 export default withRouter(
     connect(mapStateToProps, {authUser, removeError})(Main)
);