import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Root from 'root';

import App from 'components/app';

ReactDOM.render(
    <Root>
        <Router>
            <Route path='/' component={App}/>
        </Router>
    </Root>, document.querySelector('#root'));