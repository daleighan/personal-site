import React, {Component} from 'react';
import Header from './Header';
import Router from './Router';
import Footer from './Footer';
import {initialFetch, decreaseProp} from '../../store/actions/projectActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const App = () => (
  <div>
    <Header />
    <Router className="center-section" />
    <Footer />
  </div>
);

export default App;
