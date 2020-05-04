import commentsReducer from 'reducers/comments-reducer';
import authReducer from 'reducers/auth-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    comments: commentsReducer,
    isLogged: authReducer
})

