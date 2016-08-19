import 'whatwg-fetch';
import {parseJSON, checkStatus} from '../utils/helpers';

const url = 'http://localhost:8080/users/';

export const getAllUsers = (limit = 20) => {
    return fetch(url + `?_limit=${limit}`)
        .then(checkStatus)
        .then(parseJSON);
};

export const getUser = (id = 1) => {
    return fetch(url + id)
        .then(checkStatus)
        .then(parseJSON);
};

