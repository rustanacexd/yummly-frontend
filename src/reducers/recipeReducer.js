import * as types from '../actions/actionTypes';
import {recipes, recipe} from './initialState';

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
    case types.LOAD_RECIPE_SUCCESS:
      return action.recipe;

    default:
      return state;
  }
}

