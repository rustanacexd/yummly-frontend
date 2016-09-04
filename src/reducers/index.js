import {combineReducers} from 'redux';
import {recipesReducer, recipeReducer, categoriesReducer, relatedRecipesReducer} from './recipeReducer';
import {userReducer} from './userReducer';
import {tagsReducer} from './tagReducer';
import {ajaxStatusReducer, loadMoreReducer} from './ajaxStatusReducer';
import notificationReducer from './notificationReducer';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
    recipes: recipesReducer,
    recipe: recipeReducer,
    relatedRecipes: relatedRecipesReducer,
    user: userReducer,
    ajaxCallsInProgress: ajaxStatusReducer,
    isLoadMore: loadMoreReducer,
    tags: tagsReducer,
    form: formReducer,
    categories: categoriesReducer,
    notificationMessage: notificationReducer

});

export default rootReducer;
