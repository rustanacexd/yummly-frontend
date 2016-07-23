import * as types from '../actions/actionTypes';
import {recipes, recipe, relatedRecipes} from './initialState';

export function recipesReducer(state = recipes, action) {
    switch (action.type) {
        case types.LOAD_RECIPES_SUCCESS:
            return action.recipes;

        default:
            return state;
    }
}

export function recipeReducer(state = recipe, action) {
    switch (action.type) {
        case types.GET_RECIPE_SUCCESS:
            return action.recipe;

        default:
            return state;
    }
}

export function relatedRecipesReducer(state = relatedRecipes, action) {
    switch (action.type) {
        case types.GET_RELATED_RECIPE_SUCCESS:
            return action.recipes;
        default:
            return state;
    }
}
