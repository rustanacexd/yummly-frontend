import 'whatwg-fetch';
import delayPromise from '../utils/delayPromise';

const url = 'http://localhost:8080/recipes/';


class RecipeApi {
    static getAllRecipes(limit) {
        return fetch(url + `?_limit=${limit}`)
            .then(delayPromise(3000))
            .then(response => response.json());
    }

    static getRecipe(id = 1) {
        return fetch(url + id)
            .then(delayPromise(1000))
            .then(response => response.json());
    }
}

export default RecipeApi;