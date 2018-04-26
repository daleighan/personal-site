import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
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

const Router = () => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = {enter: 600, exit: 500};
  return (
    <div className="router">
      <TransitionGroup component="main">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="fade"
          unmountOnExit
          appear>
          <Switch>
            {routes.map((route, i) => {
              return (
                <Route
                  exact
                  path={route.path}
                  component={route.component}
                  key={i}
                />
              );
            })}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
export default Router;
