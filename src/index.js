import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {initStore} from '../store/';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={initStore}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
