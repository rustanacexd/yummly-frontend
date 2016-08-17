import {POST_RECIPE_SUCCESS, AJAX_CALL_ERROR} from '../actions/actionTypes';
import {notification} from './initialState';

export default function notificationReducer(state = notification, action) {
    switch (action.type) {
        case POST_RECIPE_SUCCESS:
            return {
                message: action.message,
                open: action.open
            };
        case AJAX_CALL_ERROR:
            return {
                message: action.message,
                open: action.open
            };
    }

    return state;
}
