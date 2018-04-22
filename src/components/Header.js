import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../../styles/headerStyles.scss';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
      <LinkContainer exact to="/">
        <NavItem eventKey={0}>Alex Leigh</NavItem>
      </LinkContainer>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav bsStyle="pills">
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
  </Navbar>
);

export default Header;
