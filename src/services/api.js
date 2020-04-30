import axios from "axios"

// create our own promise(since apiCall will be asynchronous)
// passes in a method to use on axios (hence no dot notation)
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