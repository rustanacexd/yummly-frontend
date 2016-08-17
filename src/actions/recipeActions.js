import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError, isLoadMore} from './ajaxStatusActions';
import RecipeApi from '../api/RecipeApi';

export function loadRecipesSuccess(recipes) {
    return {type: types.LOAD_RECIPES_SUCCESS, recipes};
}

export function getRecipeSuccess(recipe) {
    return {type: types.GET_RECIPE_SUCCESS, recipe};
}

export function getRelatedRecipesSuccess(recipes) {
    return {type: types.GET_RELATED_RECIPE_SUCCESS, recipes};
}

export function postRecipeSuccess(response) {
    return {type: types.POST_RECIPE_SUCCESS, message: response.statusText, open: true};
}

export function getCategoriesSuccess(categories) {
    return {type: types.GET_CATEGORIES_SUCCESS, categories};
}


export function postRecipe(values) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return RecipeApi.saveRecipe(values)
            .then(response => {
                dispatch(postRecipeSuccess(response));
            })
            .catch(error => {
                dispatch(ajaxCallError(error));
                throw (error);
            });
    };
}

export function loadRecipes(limit = 20, isLoad = false) {
    return dispatch => {
        dispatch(beginAjaxCall());
        if (isLoadMore) dispatch(isLoadMore(isLoad));

        return RecipeApi.getAllRecipes(limit)
            .then(recipes => dispatch(loadRecipesSuccess(recipes)))
            .catch(error => {
                dispatch(ajaxCallError(error));
                throw (error);
            });
    };
}

export function getRecipe(id) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return RecipeApi.getRecipe(id).then(recipe => {
            dispatch(getRecipeSuccess(recipe));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw (error);
        });
    };
}

export function getRelatedRecipes(category) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return RecipeApi.getRelatedRecipes(category).then(recipes => {
            dispatch(getRelatedRecipesSuccess(recipes));
        }).catch(error => {
            dispatch(ajaxCallError(error));
        });
    };
}

export function getAllCategories() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return RecipeApi.getAllCategories().then(categories => {
            dispatch(getCategoriesSuccess(categories));
        }).catch(error => {
            dispatch(ajaxCallError(error));
        });
    };
}





