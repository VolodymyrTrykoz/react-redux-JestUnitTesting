import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import App from 'components/app';
import Root from 'root';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/users', {
        status: 200,
        response: [{ name: 'name#1'}, {name: 'name#2'}]
    })
})

it('can fetch a list of components and display them', () => {
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');

    setTimeout(()=> {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(3);
    }, 1000);
    
});

afterEach(() => {
    moxios.uninstall()
})
