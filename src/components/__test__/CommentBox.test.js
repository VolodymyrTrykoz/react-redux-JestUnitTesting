import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/comment-box';
import Root from 'root';

let wrapped;

beforeEach(()=> {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
})

afterEach(()=> {
    wrapped.unmount();
})

it('has a text area', ()=>{
    expect(wrapped.find('textarea').length).toEqual(1);
});

describe('the text area', () => {

    beforeEach(()=>{
        wrapped.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        })
        wrapped.update();
    });

    it('has a typearea that user can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form is submitted, text area gets emptied', () => {        
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
})

