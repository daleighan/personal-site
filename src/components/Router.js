import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import Home from './Home';
import About from './About';
import Projects from './Projects';
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
    path: '/:id',
    exact: false,
    Component: Project,
  },
];

const Router = () => {
  return (
    <Route
      render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={600}
            classNames="fade"
            unmountOnExit
            appear>
            <Switch location={location}>
              {routes.map((route, i) => {
                const {exact, path, Component} = route;
                return (
                  <Route
                    exact={exact}
                    path={path}
                    render={props => <Component nav={props} />}
                    key={i}
                  />
                );
              })}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default Router;
