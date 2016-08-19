import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {getUser} from '../api/UserApi';

export function loadUserSuccess(user) {
    return { type: types.LOAD_USER_SUCCESS, user };
}

export function loadUser(id) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return getUser(id)
            .then(user => dispatch(loadUserSuccess(user)))
            .catch(error => {
                dispatch(ajaxCallError(error));
                throw (error);
            });
    }
}
