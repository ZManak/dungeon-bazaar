import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counterReducer'

const store = createStore(counterReducer, composeWithDevTools(applyMiddleware(logger)));

export default store