import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/projects',
    component: Projects,
  },
  {
    path: '/contact',
    component: Contact,
  },
];

const Router = () => (
  <Switch>
    {routes.map((route, i) => (
      <Route exact path={route.path} component={route.component} key={i} />
    ))}
  </Switch>
);

export default Router;
