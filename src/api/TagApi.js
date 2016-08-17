import 'whatwg-fetch';
import delayPromise from '../utils/delayPromise';
import {parseJSON, checkStatus} from '../utils/helpers';


const url = 'http://localhost:8080/tags/';
const delay = 1000;


class TagApi {
    static getTags() {
        return fetch(url)
            .then(checkStatus)
            .then(parseJSON);
    }


}

export default TagApi;
