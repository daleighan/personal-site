import React from 'react';
import headerItems from './headerItems';
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

const Header = ({modalOpen, toggleModal}) => (
  <Navbar className="custom-header" color="dark" light>
    <NavLink tag={Link} to="/">
      Alex Leigh: Software Engineer
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
          <span className="contact-btn">Get In Touch</span>
          <Modal isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader>How to reach out</ModalHeader>
            <ModalBody>
              {headerItems.map(item => (
                <div className="modal-entry" key={item.id}>
                  <a href={item.ref} id={item.id} target="_blank">
                    <img className="footer-icon" src={item.src} />
                    <span className="modal-txt">{item.txt}</span>
                  </a>
                </div>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() =>
                  window.open('/Alexander+Leigh+Resume.pdf', '_blank')
                }
                color="info">
                Resume
              </Button>
              <Button color="info" onClick={toggleModal}>
                Close
              </Button>
            </ModalFooter>
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
