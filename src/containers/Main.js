// Main will be responsible for our routing logic
 import React from "react";
 import {Switch, Route, withRouter, Redirect} from "react-router-dom";
 import {connect} from "react-redux";
 import Homepage from "../components/Hompage";

 // Switch component will allow for multiple routes and 404 logic
 const Main = props => {
     return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage {...props} />} />
            </Switch>
        </div>
    );
 };

 function mapStateToProps(state) {
     return {
         currentUser: state.currentUser
     };
 }

 export default withRouter(connect(mapStateToProps, null)(Main));