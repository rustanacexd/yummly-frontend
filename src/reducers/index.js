import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import recipes from './recipeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    recipes,
    ajaxCallsInProgress
});

export default rootReducer;
