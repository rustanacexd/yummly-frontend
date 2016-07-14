import 'whatwg-fetch';

const url = 'http://localhost:8080/recipes';


class RecipeApi {
    static getAllRecipes(limit = 20) {
        return fetch(url + `?_limit=${limit}`)
            .then(response => response.json());
    }
}

export default RecipeApi;