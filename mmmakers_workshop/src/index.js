import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
