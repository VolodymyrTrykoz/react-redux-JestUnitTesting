import commentsReducer from 'reducers/comments-reducer';
import {CREATE_COMMENT} from 'actions/actionTypes';

it('handles actions of type CREATE_COMMENT', ()=> {
    const action = {
        type: CREATE_COMMENT,
        payload: 'some text'
    }

    const newState = commentsReducer([], action);

    expect(newState).toEqual(["some text"]);

})

it('handles action with unknowt type', () => {
    const newState = commentsReducer([], {type: 'SKDMKDMDMD'});

    expect(newState).toEqual([]);
})