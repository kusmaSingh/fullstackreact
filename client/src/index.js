import materializeCSS from 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

//const store  = createStore(() => [], {}, applyMiddleware());

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);
console.log("Stripe keys are: "+ process.env.REACT_APP_STRIPE_KEY + process.env.NODE_ENV  );