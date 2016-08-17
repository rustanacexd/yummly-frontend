import 'whatwg-fetch';
import delayPromise from '../utils/delayPromise';

const url = 'http://localhost:8080/recipes/';
const delay = 2000;
const categoriesURL = 'http://localhost:8080/categories';

class RecipeApi {
    static getAllRecipes(limit) {
        return fetch(url + `?_limit=${limit}`).then(RecipeApi.parseJSON);
    }

    static getRecipe(id = 1) {
        return fetch(url + id).then(RecipeApi.parseJSON);
    }

    static getRelatedRecipes(category) {
        return fetch(url + `?category=${category}`).then(RecipeApi.parseJSON);

    }

    static saveRecipe(values) {
        return fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        }).then(delayPromise(delay)).then(RecipeApi.checkStatus);
    }


    static getAllCategories() {
        return fetch(categoriesURL).then(RecipeApi.parseJSON);
    }

    static parseJSON(response) {
        return response.json();
    }

    static checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error
        }
    }
}

export default RecipeApi;
