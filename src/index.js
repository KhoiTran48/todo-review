import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, compose, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

// import './assets/css/bootstrap.min.css';
// import './assets/css/font-awesome.css';
import './assets/css/style.css';

// import './assets/js/jquery-3.3.1.slim.min';
// import './assets/js/popper.min';
// import './assets/js/bootstrap.min';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk)),
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
