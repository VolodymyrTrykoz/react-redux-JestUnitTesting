import {CREATE_COMMENT} from 'actions/actionTypes';

const initialState = []

const commentsReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_COMMENT: {
            return [...state, action.payload]
        }
        default: return state
    }
}

export default commentsReducer;
