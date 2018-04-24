import React from 'react';
import {UncontrolledTooltip} from 'reactstrap';
import '../../scss/footerStyles.scss';

const Footer = () => (
  <div className="footer">
    <span className="icon-holder">
      <a href="#" id="emailTooltip">
        <img className="footer-icon" src="email.png" />
      </a>
      <UncontrolledTooltip autohide={false} placement="top" target="emailTooltip">
        Hello world!
      </UncontrolledTooltip>
    </span>
    <span className="icon-holder">
      <a href="#" id="phoneTooltip">
        <img className="footer-icon" src="cellphone-android.png" />
      </a>
      <UncontrolledTooltip autohide={false} placement="top" target="phoneTooltip">
        Hello world!
      </UncontrolledTooltip>
    </span>
    <span className="icon-holder">
      <a href="#" id="githubTooltip">
        <img className="footer-icon" src="github-box.png" />
      </a>
      <UncontrolledTooltip autohide={false} placement="top" target="githubTooltip">
        Hello world!
      </UncontrolledTooltip>
    </span>
    <span className="icon-holder">
      <a href="#" id="linkedinTooltip">
        <img className="footer-icon" src="linkedin-box.png" />
      </a>
      <UncontrolledTooltip autohide={false} placement="top" target="linkedinTooltip">
        Hello world!
      </UncontrolledTooltip>
    </span>
  </div>
);

export default Footer;
