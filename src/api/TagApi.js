import 'whatwg-fetch';
import delayPromise from '../utils/delayPromise';

const url = 'http://localhost:8080/tags/';
const delay = 1000;


class TagApi {
    static getTags() {
        return fetch(url).then(TagApi.parseJSON);
    }

    static parseJSON(response) {
        return response.json();
    }
}

export default TagApi;
