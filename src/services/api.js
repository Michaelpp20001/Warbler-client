import axios from "axios"
import errors from "../store/reducers/errors"
import { useCallback } from "react"

// create our own promise(since apiCall will be asynchronous)
// passes in a method to use on axios (hence no dot notation)

// A wrapper around axios API call that formats errors, etc 
// @param {string} method the HTTP verb you want to use
// @param {string} path the route path/endpoint
// @param {object} data {optional} data in JSON form for POST

export function apiCall(method, path, data) {
    return new Promise((resolve, reject) => {
        return axios[method](path, data)
            .then(res => {
                return resolve(res.data);
            })
            .catch(err => {
                return reject(err.response.data.error);
            });
    });
}