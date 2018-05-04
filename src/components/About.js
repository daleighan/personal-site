import React from 'react';
import {Container, Button} from 'reactstrap';
import '../../scss/aboutStyles.scss';

const About = () => (
  <Container className="about-container">
    <h1 className="about-title">More About Me:</h1>
    <div className="img-contain">
      <img src="me.jpg" />
    </div>
    <div className="about-body">
      Hello, and welcome to my website! If you are here, I am guessing you would
      like to know more about me and my work.
    </div>
  </Container>
);

export default About;
