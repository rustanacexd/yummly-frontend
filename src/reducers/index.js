import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {recipesReducer, recipeReducer} from './recipeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    recipes: recipesReducer,
    recipe: recipeReducer,
    ajaxCallsInProgress
});

export default rootReducer;
