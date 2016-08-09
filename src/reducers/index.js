import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {recipesReducer, recipeReducer, relatedRecipesReducer} from './recipeReducer';
import {userReducer} from './userReducer';
import {ajaxStatusReducer, loadMoreReducer } from './ajaxStatusReducer';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    routing: routerReducer,
    recipes: recipesReducer,
    recipe: recipeReducer,
    relatedRecipes: relatedRecipesReducer,
    user: userReducer,
    ajaxCallsInProgress: ajaxStatusReducer,
    isLoadMore: loadMoreReducer,
    form: formReducer
});

export default rootReducer;
