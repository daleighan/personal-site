import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Routes = () => (
  <Switch>
    <Route exact path={'/'} component={Home} />
  </Switch>
);

export default Routes;
