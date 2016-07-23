import * as types from './actionTypes';

export function beginAjaxCall() {
  return {type: types.BEGIN_AJAX_CALL};
}

export function ajaxCallError() {
  return {type: types.AJAX_CALL_ERROR};
}

// export function isLoadMore(isLoadMore) {
//   return {type: types.IS_LOAD_MORE, isLoadMore};
// }

export function isLoadMore(isLoadMore) {
  return {type: types.IS_LOAD_MORE, isLoadMore};
}

