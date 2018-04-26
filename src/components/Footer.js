import React from 'react';
import {UncontrolledTooltip} from 'reactstrap';
import '../../scss/footerStyles.scss';

const footerItems = [
  {
    ref: 'tel:1-202-550-0872',
    id: 'phoneTooltip',
    src: 'cellphone-android.png',
    text: 'Call Me',
  },
  {
    ref: 'mailto:daleighan@gmail.com',
    id: 'emailTooltip',
    src: 'email.png',
    text: 'Email Me',
  },
  {
    ref: 'https://github.com/daleighan',
    id: 'githubTooltip',
    src: 'github-box.png',
    text: 'My GitHub',
  },
  {
    ref: 'https://www.linkedin.com/in/alexander-leigh',
    id: 'linkedinTooltip',
    src: 'linkedin-box.png',
    text: 'My LinkedIn',
  },
];

const Footer = () => (
  <div className="footer">
    {footerItems.map(item => (
      <span key={item.id} className="icon-holder">
        <a href={item.ref} id={item.id}>
          <img className="footer-icon" src={item.src} />
        </a>
        <UncontrolledTooltip autohide={true} placement="top" target={item.id}>
          <a href={item.ref} className="no-underline">
            {item.text}
          </a>
        </UncontrolledTooltip>
      </span>
    ))}
  </div>
);

export default Footer;
