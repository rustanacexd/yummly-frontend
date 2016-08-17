import 'whatwg-fetch';
import {parseJSON, checkStatus} from '../utils/helpers';

const url = 'http://localhost:8080/users/';


class UserApi {
    static getAllUsers(limit = 20) {
        return fetch(url + `?_limit=${limit}`)
            .then(checkStatus)
            .then(parseJSON);
    }

    static getUser(id = 1) {
        return fetch(url + id)
            .then(checkStatus)
            .then(parseJSON);
    }
}

export default UserApi;
