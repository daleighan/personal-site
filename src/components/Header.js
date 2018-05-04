import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavLink, Nav, NavItem, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleModal} from '../../store/actions/projectActions';
import '../../scss/headerStyles.scss';

const Header = ({modalOpen, toggleModal}) => {
  console.log(modalOpen); 
  return(
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
            Hello!
          </Modal>
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
)};

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
