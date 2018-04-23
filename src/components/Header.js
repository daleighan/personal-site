import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavLink, Nav, NavItem} from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../../scss/headerStyles.scss';

const Header = () => (
  <Navbar color="dark" light>
    <NavLink tag={Link} to="/">
      Alexander Leigh: Full Stack Developer
    </NavLink>
    <Nav>
      <NavItem>
        <NavLink tag={Link} to="/about">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/projects">
          Projects
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/contact">
          Get In Touch!
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
