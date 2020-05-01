import {CREATE_COMMENT} from 'actions/actionTypes';

export function createComment(comment) {
    return {
        type: CREATE_COMMENT,
        payload: comment
    }
}