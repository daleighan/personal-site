import React from 'react';
import footerItems from './footerItems';
import {UncontrolledTooltip} from 'reactstrap';
import '../../scss/footerStyles.scss';

const Footer = () => (
  <div className="footer">
    {footerItems.map(item => (
      <span key={item.id} className="icon-holder">
        <a href={item.ref} target="_blank" id={item.id}>
          <img className="footer-icon" src={item.src} />
        </a>
        <UncontrolledTooltip autohide={true} placement="top" target={item.id}>
          <a href={item.ref} target="_blank" className="no-underline">
            {item.text}
          </a>
        </UncontrolledTooltip>
      </span>
    ))}
  </div>
);

export default Footer;
