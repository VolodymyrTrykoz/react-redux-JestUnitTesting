import React from 'react';
import {mount} from 'enzyme';

import CommentList from 'components/comment-list';
import Root from 'root';

let wrapped;

beforeEach(()=> {

    const initialState = {
        comments: ['comment1', 'comment2']
    }

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
})

it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});