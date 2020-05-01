import {apiCall} from "../../services/api";
import {addError} from "./errors";
import {LOAD_MESSAGES} from "../actionTypes";
import {REMOVE_MESSAGES} from "../actionTypes";

export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

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