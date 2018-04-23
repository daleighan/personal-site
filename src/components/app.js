import React, {Component} from 'react';
import Header from './Header';
import Routes from './Routes';
import {initialFetch, decreaseProp} from '../../store/actions/projectActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const App = () => (
  <div>
    <Header />
    <Routes />
  </div>
);

export default App;
