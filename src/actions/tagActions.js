import {GET_TAGS_SUCCESS} from './actionTypes';
import {getAllTags} from '../api/TagApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function getTagsSuccess(tags) {
    return {type: GET_TAGS_SUCCESS, tags};
}

export function getTags() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return getAllTags().then(tags => dispatch(getTagsSuccess(tags)))
            .catch(error => {
                dispatch(ajaxCallError(error));
            });
    };
}

