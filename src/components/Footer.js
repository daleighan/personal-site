import React from 'react';
import {UncontrolledTooltip} from 'reactstrap';
import '../../scss/footerStyles.scss';

const Footer = () => (
  <div className="footer">
    <span className="icon-holder">
      <a href="tel:1-202-550-0872" id="phoneTooltip">
        <img className="footer-icon" src="cellphone-android.png" />
      </a>
      <UncontrolledTooltip autohide={false} placement="top" target="phoneTooltip">
        <a href="tel:1-202-550-0872" className="no-underline">Call Me</a> 
      </UncontrolledTooltip>
    </span>
    <span className="icon-holder">
      <a href="mailto:daleighan@gmail.com" id="emailTooltip">
        <img className="footer-icon" src="email.png" />
      </a>
      <UncontrolledTooltip autohide={false} placement="top" target="emailTooltip">
        <a href="mailto:daleighan@gmail.com" className="no-underline">Email Me</a>
      </UncontrolledTooltip>
    </span>
    <span className="icon-holder">
      <a href="http://github.com/daleighan" id="githubTooltip">
        <img className="footer-icon" src="github-box.png" />
      </a>
      <UncontrolledTooltip autohide={false} placement="top" target="githubTooltip">
        <a href="https://github.com/daleighan" className="no-underline">My GitHub</a>
      </UncontrolledTooltip>
    </span>
    <span className="icon-holder">
      <a href="https://www.linkedin.com/in/alexander-leigh" id="linkedinTooltip">
        <img className="footer-icon" src="linkedin-box.png" />
      </a>
      <UncontrolledTooltip autohide={false} placement="top" target="linkedinTooltip">
        <a href="https://www.linkedin.com/in/alexander-leigh" className="no-underline">My LinkedIn</a>
      </UncontrolledTooltip>
    </span>
  </div>
);

export default Footer;
