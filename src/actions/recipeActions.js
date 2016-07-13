import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import 'whatwg-fetch';

export function loadRecipesSuccess(recipes) {
    return { type: types.LOAD_RECIPES_SUCCESS, recipes };
}

export function loadRecipes() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return fetch('http://localhost:8080/recipes')
            .then(response => response.json())
            .then(recipes => {
                dispatch(loadRecipesSuccess(recipes));
            }).catch(error => {
                throw (error);
            });
    };
}
