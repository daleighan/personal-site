import React from 'react';
import {Link} from 'react-router-dom';
import {
  Navbar,
  NavLink,
  Nav,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleModal} from '../../store/actions/projectActions';
import '../../scss/headerStyles.scss';

const contactItems = [
  {
    ref: 'tel:1-202-550-0872',
    txt: '202-550-0872',
    id: 'phoneTooltip',
    src: 'cellphone-android-black.png',
    text: 'Call Me',
    name: 'Phone',
  },
  {
    ref: 'mailto:daleighan@gmail.com',
    txt: 'daleighan@gmail.com',
    id: 'emailTooltip',
    src: 'email-black.png',
    name: 'E-mail',
  },
  {
    ref: 'https://github.com/daleighan',
    txt: 'github.com/daleighan',
    id: 'githubTooltip',
    src: 'github-box-black.png',
    name: 'GitHub',
  },
  {
    ref: 'https://www.linkedin.com/in/alexander-leigh',
    txt: 'linkedin.com/in/alexander-leigh',
    id: 'linkedinTooltip',
    src: 'linkedin-box-black.png',
    name: 'LinkedIn',
  },
];

const Header = ({modalOpen, toggleModal}) => (
  <Navbar className="custom-header" color="dark" light>
    <NavLink tag={Link} to="/">
      Alex Leigh: Full Stack Developer
    </NavLink>
    <Nav>
      <NavItem>
        <NavLink tag={Link} to="/about">
          About Me
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/projects">
          Projects
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" onClick={toggleModal}>
          <span className="contact-btn">Get In Touch!</span>
          <Modal isOpen={modalOpen} toggle={toggleModal}>
            <h3>Ways To Contact Me:</h3>
            <ModalBody>
              {contactItems.map(item => (
                <div className="modal-entry" key={item.id}>
                  <a href={item.ref} id={item.id}>
                    <img className="footer-icon" src={item.src} />
                    <span className="modal-txt">{item.txt}</span>
                  </a>
                </div>
              ))}
            </ModalBody>
            <Button className="info-button" color="info" onClick={toggleModal}>
              Close
            </Button>
          </Modal>
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

const mapStateToProps = ({projectReducer}) => {
  return {
    modalOpen: projectReducer.modalOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: bindActionCreators(toggleModal, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
