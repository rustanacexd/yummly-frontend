import * as types from '../actions/actionTypes';
import {recipes, recipe } from './initialState';

export function recipesReducer(state = recipes, action) {
    switch (action.type) {
        case types.LOAD_RECIPES_SUCCESS:
        case types.GET_RELATED_RECIPE_SUCCESS:
            return action.recipes;

        default:
            return state;
    }
}

export function recipeReducer(state = recipe, action) {
    if (action.type == types.GET_RECIPE_SUCCESS) {
        return action.recipe;
    }

    return state;
}

export function categoriesReducer(state = [], action) {
    if (action.type == types.GET_CATEGORIES_SUCCESS) {
        return action.categories;
    }

    return state;
}
