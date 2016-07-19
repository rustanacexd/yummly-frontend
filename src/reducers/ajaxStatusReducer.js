import * as types from '../actions/actionTypes';
import {ajaxCallsInProgress, isLoadMore} from './initialState';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

export function ajaxStatusReducer(state = ajaxCallsInProgress, action) {
    if (action.type == types.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (action.type == types.AJAX_CALL_ERROR ||
        actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }


    return state;
}

export function loadMoreReducer(state = isLoadMore, action) {
  switch (action.type) {
    case types.IS_LOAD_MORE:
      return action.isLoadMore;
    default:
      return state;
  }
}