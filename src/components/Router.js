import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import '../../scss/routerStyles.scss';

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
  <div className="router">
    <Switch>
      {routes.map((route, i) => {
        return (
          <Route exact path={route.path} component={route.component} key={i} />
        );
      })}
    </Switch>
  </div>
);

export default Router;
