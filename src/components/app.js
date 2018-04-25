import React, {Component} from 'react';
import Header from './Header';
import Routes from './Routes';
import Footer from './Footer';
import {initialFetch, decreaseProp} from '../../store/actions/projectActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const App = () => (
  <div style={{height: '74vh'}}>
    <Header />
    <Routes />
    <Footer />
  </div>
);

export default App;
