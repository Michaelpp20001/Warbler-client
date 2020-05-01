//handle validation if a user is logged in before they see a specific component
import React, {Component} from "react";
import {connect} from "react-redux";
import UserAside from "../components/UserAside";

export default function(ComponentToBeRendered) {
    class Authenticate extends Component {
        componentWillMount() {
            if(this.props.isAuthenticated === false) {
                this.props.history.push("/signin");
            }
        }
        componentWillUpdate(nextProps) {
            if(this.nextProps.isAuthenticated === false) {
                this.props.history.push("/signin");
            }
        }
        render () {
            return <ComponentToBeRendered {...this.props} />
        }
    }


function mapStateToProps(state) {
    return {
        isAuthenticated: state.currentUser.isAuthenticated
    };
}

return connect(mapStateToProps)(Authenticate)
}