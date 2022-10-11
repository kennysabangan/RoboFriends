import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import 'tachyons'
import './index.css'
import App from './containers/App';

const rootReducer = combineReducers({ searchRobots, requestRobots })

let middleware: any = [thunkMiddleware]
// if (process.env.NODE_ENV === 'production') {
//   middleware = [thunkMiddleware]
// } else {
//   const logger = createLogger();
//   middleware = [thunkMiddleware, logger]
// }
const store = createStore(rootReducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();