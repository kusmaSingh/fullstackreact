import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux';
//const store  = createStore(() => [], {}, applyMiddleware());

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);
