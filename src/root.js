import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'reducers';


export default ({children, initialState = {}}) => {
    return (
        <Provider store= {createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))}>
            {children}
        </Provider>
    )
}
