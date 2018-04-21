import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <div>
    <Link to='/about'>About</Link>
    <Link to='/projects'>Projects</Link>
    <Link to='/contact'>Contact</Link>
  </div>
);

export default Header;
