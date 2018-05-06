import React from 'react';
import {Container, Button} from 'reactstrap';
import '../../scss/aboutStyles.scss';

const About = ({nav}) => (
  <Container className="about-container">
    <div className="back-button-holder">
      <Button onClick={() => nav.history.push('/')} color="info">
        Back
      </Button>
    </div>
    <h2 className="display-3">About Me</h2>
    <hr className="my-2" />
    <div className="img-contain">
      <img src="me.jpg" />
    </div>
    <div className="about-body">
      Hello, and welcome to my website! If you have made it here, I am guessing
      you would like to know a bit more about me and my work.
      <div className="technologies">
        <div className="tech-title">Preferred Technologies:</div>
        <hr className="my-2" />
        <div>Languages: JavaScript, Python</div>
        <div>Front-End: React, Redux, HTML, CSS, SCSS, Webpack, Next.js</div>
        <div>
          Back-End: Node.js, Express, Flask, ReST, Sequelize, Express Session,
          JWTs
        </div>
        <div>Databases: SQL, PostgreSQL, DynamoDB</div>
        <div>Mobile: React Native</div>
        <div>Version Control: Git</div>
        <div>AWS: EC2, Lambda, RDS, Cognito</div>
        <div>Testing: Mocha, Chai</div>
        <div>Other: Agile Methodology, Docker, Socket.io</div>
      </div>
    </div>
  </Container>
);

export default About;
