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

export const postAllTags = (tags) => {

    for (let tag of tags) {
        fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tag)
        });
    }

};

