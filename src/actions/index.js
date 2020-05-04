import axios from 'axios';
import {CREATE_COMMENT, FETCH_COMMENTS, LOG_IN, LOG_OUT} from 'actions/actionTypes';

export const createComment = comment => {
    return {
        type: CREATE_COMMENT,
        payload: comment
    }
}

export const fetchCommentsSuccess = comments => {  
    return {
        type: FETCH_COMMENTS,
        payload: comments
    }
}

export const fetchComments = () => async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const comments = response.data.map(el => el.name);
    dispatch(fetchCommentsSuccess(comments));
}

export const logIn = () => {
    return {
        type: LOG_IN
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT
    }
}
