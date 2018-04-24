import React from 'react';
import '../../scss/footerStyles.scss';

const Footer = () => (
  <div className="footer">
    <span className="icon-holder">
      <img className="footer-icon" src="email.png" />
    </span>
    <span className="icon-holder">
      <img className="footer-icon" src="cellphone-android.png" />
    </span>
    <span className="icon-holder">
      <img className="footer-icon" src="github-box.png" />
    </span>
    <span className="icon-holder">
      <img className="footer-icon" src="linkedin-box.png" />
    </span>
  </div>
);

export default Footer;
