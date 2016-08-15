import {GET_TAGS_SUCCESS} from './actionTypes';
import TagApi from '../api/TagApi';

export function getTagsSuccess(tags) {
    return {type: GET_TAGS_SUCCESS, tags};
}

export function getTags() {
    return dispatch => {
        return TagApi.getTags().then(tags => dispatch(getTagsSuccess(tags)))
            .catch(error => {
                throw (error);
            });
    };
}

