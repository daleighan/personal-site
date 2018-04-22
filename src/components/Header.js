import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => (
  <Nav bsStyle="tabs" activeKey="1">
    <LinkContainer exact to="/">
      <NavItem eventKey={1}>Home</NavItem>
    </LinkContainer>
    <LinkContainer to="/about">
      <NavItem eventKey={2}>About</NavItem>
    </LinkContainer>
    <LinkContainer to="/projects">
      <NavItem eventKey={3}>Projects</NavItem>
    </LinkContainer>
    <LinkContainer to="/contact">
      <NavItem eventKey={4}>Contact</NavItem>
    </LinkContainer>
  </Nav>
);

export default Header;
