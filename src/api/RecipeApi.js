import 'whatwg-fetch';
import delayPromise from '../utils/delayPromise';

const url = 'http://localhost:8080/recipes/';
const delay = 1000;


class RecipeApi {
    static getAllRecipes(limit) {
        return RecipeApi.toRespJson(fetch(url + `?_limit=${limit}`));
    }

    static getRecipe(id = 1) {
        return RecipeApi.toRespJson(fetch(url + id));
    }

    static getRelatedRecipes(category) {
        return RecipeApi.toRespJson(fetch(url + `?category=${category}`));
    }

    static saveRecipe(values) {
        return RecipeApi.toRespJson(fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        }));
    }

    static toRespJson(promise) {
        return promise
            .then(delayPromise(delay))
            .then(response => response.json());
    }
}

export default RecipeApi;
