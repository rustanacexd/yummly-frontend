import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {recipesReducer, recipeReducer} from './recipeReducer';
import {userReducer} from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    recipes: recipesReducer,
    recipe: recipeReducer,
    user: userReducer,
    ajaxCallsInProgress
});

export default rootReducer;
