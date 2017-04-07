
import React from 'react';

import ReactDOM from 'react-dom';

import App from './app';
import reducer from './reducers/index.reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

require('bulma/css/bulma.css');


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('ROOT'));