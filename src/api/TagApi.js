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

    static postTags(tags) {
        return fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tags)
        }).then(delayPromise(delay)).then(checkStatus);
    }

}

export default TagApi;
