import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const { applyMiddleware } = require('redux');

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
