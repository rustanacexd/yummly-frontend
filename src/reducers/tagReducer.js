import {GET_TAGS_SUCCESS} from '../actions/actionTypes';
import {tags} from './initialState';


export function tagsReducer(state = tags, action) {
    if (action.type === GET_TAGS_SUCCESS) {
        return action.tags;
    }

    return state;
}
