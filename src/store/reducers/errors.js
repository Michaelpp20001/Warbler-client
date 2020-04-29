import {ADD_ERROR, REMOVE_ERROR} from "../actionTypes";

// generic error handler reducer for all types of errors
export default (state = {message: null}, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return {...state, message: action.error};
        case REMOVE_ERROR:
            return {...state, message: null};
        default:
            return state;
    }
};