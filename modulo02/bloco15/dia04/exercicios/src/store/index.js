// Importe o método applyMiddleware
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// Aplique o middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
