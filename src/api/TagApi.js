import 'whatwg-fetch';
import delayPromise from '../utils/delayPromise';
import {parseJSON, checkStatus} from '../utils/helpers';


const url = 'http://localhost:8080/tags/';
const delay = 1000;


export const getAllTags = () => {
    return fetch(url)
        .then(checkStatus)
        .then(parseJSON);
};

export const postTags = (tags) => {
    return fetch(url, {
        method: 'post',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tags)
    }).then(delayPromise(delay)).then(checkStatus);
};

