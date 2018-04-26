import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Project from './Project';
import '../../scss/routerStyles.scss';

const routes = [
  {
    path: '/',
    exact: true,
    Component: Home,
  },
  {
    path: '/about',
    exact: true,
    Component: About,
  },
  {
    path: '/projects',
    exact: true,
    Component: Projects,
  },
  {
    path: '/contact',
    exact: true,
    Component: Contact,
  },
  {
    path: '/:id',
    exact: false,
    Component: Project,
  },
];

const Router = () => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = {enter: 600, exit: 500};
  return (
    <TransitionGroup component="main">
      <CSSTransition
        key={currentKey}
        timeout={timeout}
        classNames="fade"
        unmountOnExit
        appear>
        <Switch>
          {routes.map((route, i) => {
            const {exact, path, Component} = route;
            return (
              <Route
                exact={exact}
                path={path}
                render={(props) => <Component props={props} />}
                key={i}
              />
            );
          })}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Router;
