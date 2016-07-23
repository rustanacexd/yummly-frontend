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

    static toRespJson(promise) {
        return promise
            .then(delayPromise(delay))
            .then(response => response.json());
    }
}

export default RecipeApi;
