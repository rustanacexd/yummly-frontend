import 'whatwg-fetch';

const url = 'http://localhost:8080/users/';


class UserApi {
    static getAllUsers(limit = 20) {
        return fetch(url + `?_limit=${limit}`)
            .then(response => response.json());
    }

    static getUser(id = 1) {
        return fetch(url + id)
            .then(response => response.json());
    }
}

export default UserApi;