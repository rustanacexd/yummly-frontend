import * as types from '../actions/actionTypes';
import {user} from './initialState';

export function userReducer(state = user, action) {
    switch (action.type) {
        case types.LOAD_USER_SUCCESS:
            return action.user;

        default:
            return state;
    }
}
