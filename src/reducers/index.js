import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {recipesReducer, recipeReducer} from './recipeReducer';
import {userReducer} from './userReducer';
import {ajaxStatusReducer, loadMoreReducer } from './ajaxStatusReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    recipes: recipesReducer,
    recipe: recipeReducer,
    user: userReducer,
    ajaxCallsInProgress: ajaxStatusReducer,
    isLoadMore: loadMoreReducer
});

export default rootReducer;
