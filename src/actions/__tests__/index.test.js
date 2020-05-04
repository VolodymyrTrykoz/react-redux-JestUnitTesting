import {CREATE_COMMENT} from 'actions/actionTypes';
import {createComment} from 'actions';


describe('save comment', ()=> {
    it('creates type with received payload', ()=> {
        const result = createComment('text');
    
        expect(result).toEqual({
            type: CREATE_COMMENT,
            payload: 'text'   
        });
    });
})

