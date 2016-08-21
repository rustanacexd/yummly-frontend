import 'whatwg-fetch';
import delayPromise from '../utils/delayPromise';
import {parseJSON, checkStatus} from '../utils/helpers';

const url = 'http://localhost:8080/recipes/';
const delay = 3000;
const categoriesURL = 'http://localhost:8080/categories';

class RecipeApi {
    static getAllRecipes(limit) {
        return fetch(url + `?_limit=${limit}`)
            .then(delayPromise(delay))
            .then(checkStatus)
            .then(parseJSON);
    }

    static getRecipe(id = 1) {
        return fetch(url + id)
            .then(checkStatus)
            .then(parseJSON);
    }

    static getRelatedRecipes(category) {
        return fetch(url + `?category=${category}`)
            .then(parseJSON);

    }

    static saveRecipe(values) {
        return fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(delayPromise(delay)).then(checkStatus);
    }


    static getAllCategories() {
        return fetch(categoriesURL)
            .then(checkStatus)
            .then(parseJSON);
    }

}

export default RecipeApi;
