import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, browserHistory} from 'react-router-dom';
import {initStore} from '../store/';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter history={browserHistory}>
    <Provider store={initStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
