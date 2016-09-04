import * as types from './actionTypes';

export function beginAjaxCall() {
    return {type: types.BEGIN_AJAX_CALL};
}

export function ajaxCallError(error) {
    return {type: types.AJAX_CALL_ERROR, message: error.message, open: true};
}

export function isLoadMore(isLoadMore) {
    return {type: types.IS_LOAD_MORE, isLoadMore};
}

export function notificationUpdate(message, open) {
    return {
        type: types.NOTIFICATION_UPDATE, message , open
    };
}

