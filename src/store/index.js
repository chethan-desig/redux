import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from '../Reducers';
import {logger} from 'redux-logger';

let store = createStore(reducers,applyMiddleware(promiseMiddleware,logger));
export default store