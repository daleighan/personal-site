import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

let middleware = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger]
}

export const initStore = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);
