import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavLink, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../../styles/headerStyles.scss';

const Header = () => (
  <Navbar color="dark" light>
    <NavLink tag={Link} to="/">
      Alex Leigh: Full Stack Developer
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
