import {apiCall} from "../../services/api";
import {addError} from "./errors";
import {LOAD_MESSAGES} from "../actionTypes";
import {REMOVE_MESSAGE} from "../actionTypes";


// action creators
export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

export const remove = id => ({
    type: REMOVE_MESSAGE,
    id
})

// thunks
export const removeMessage = (user_id, message_id) => {
    return dispatch => {
        return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
        .then(() => dispatch(remove(message_id)))
        .catch(err => addError(err.message));
    };
};


export const fetchMessages = () => {
    return async dispatch => {
        try {
            const res = await apiCall("get", "/api/messages");
            dispatch(loadMessages(res));
        }
        catch (err) {
            dispatch(addError(err.message));
        }
    };
};

export const postNewMessage = text => (dispatch, getState) => {
    let {currentUser} = getState();
     const id = currentUser.user.id;
     return apiCall("post", `/api/users/${id}/messages`, {text})
     .then(res => {})
     .catch(err => addError(err.message));
};