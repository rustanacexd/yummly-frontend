import {POST_RECIPE_SUCCESS, AJAX_CALL_ERROR, NOTIFICATION_UPDATE} from '../actions/actionTypes';
import {notification} from './initialState';

export default function notificationReducer(state = notification, action) {
    switch (action.type) {
        case POST_RECIPE_SUCCESS:
        case AJAX_CALL_ERROR:
        case NOTIFICATION_UPDATE:
            return {
                message: action.message,
                open: action.open
            };
    }

    return state;
}
