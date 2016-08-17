import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {recipesReducer, recipeReducer, categoriesReducer} from './recipeReducer';
import {userReducer} from './userReducer';
import {tagsReducer} from './tagReducer';
import {ajaxStatusReducer, loadMoreReducer} from './ajaxStatusReducer';
import notificationReducer from './notificationReducer';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
    routing: routerReducer,
    recipes: recipesReducer,
    recipe: recipeReducer,
    relatedRecipes: recipesReducer,
    user: userReducer,
    ajaxCallsInProgress: ajaxStatusReducer,
    isLoadMore: loadMoreReducer,
    tags: tagsReducer,
    form: formReducer,
    categories: categoriesReducer,
    notificationMessage: notificationReducer

});

export default rootReducer;
