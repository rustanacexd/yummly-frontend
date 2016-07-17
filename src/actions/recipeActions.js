import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError, isLoadMore} from './ajaxStatusActions';
import RecipeApi from '../api/RecipeApi';

export function loadRecipesSuccess(recipes) {
    return { type: types.LOAD_RECIPES_SUCCESS, recipes };
}

export function loadRecipeSuccess(recipe) {
    return { type: types.LOAD_RECIPE_SUCCESS, recipe };
}

export function loadRecipes(limit = 20, isLoad = false) {
    return dispatch => {
        dispatch(beginAjaxCall());
        if(isLoadMore) dispatch(isLoadMore(isLoad));
        return RecipeApi.getAllRecipes(limit)
            .then(recipes => dispatch(loadRecipesSuccess(recipes)))
            .catch(error => {
                dispatch(ajaxCallError(error));
                throw (error);
            });
    };
}


export function loadRecipe(id) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return RecipeApi.getRecipe(id).
            then(recipe => {
                dispatch(loadRecipeSuccess(recipe));
            }).catch(error => {
                dispatch(ajaxCallError(error));
                throw (error);
            })
    };
}

