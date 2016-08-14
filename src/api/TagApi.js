import 'whatwg-fetch';
import delayPromise from '../utils/delayPromise';

const url = 'http://localhost:8080/tags/';
const delay = 1000;


class TagApi {
    static getTags() {
        return TagApi.toRespJson(fetch(url));
    }
    
    static toRespJson(promise) {
        return promise
            .then(delayPromise(delay))
            .then(response => response.json());
    }
}

export default TagApi;
