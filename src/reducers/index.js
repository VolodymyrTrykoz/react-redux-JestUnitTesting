import commentsReducer from 'reducers/comments-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    comments: commentsReducer
})

