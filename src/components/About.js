import React from 'react';
import {Container, Button} from 'reactstrap';
import '../../scss/aboutStyles.scss';

const About = ({nav}) => (
  <Container className="about-container">
    <h2 className="display-3">About</h2>
    <hr className="my-2" />
    <div className="img-contain">
      <img src="me.jpg" />
    </div>
    <div className="about-body">
      <p>
        Welcome to my website! I am a full-stack web developer aspires to bring
        a uniquely creative approach to what I do. My background growing up and
        through college is in classical violin which I have played and studied
        for over 20 years. This has caused me to have a pervasive artistic
        approach to all aspects of my life. I have also had a passion for coding
        and technology from the age of 10 which started with coding games in
        BASIC for computers and graphing calculators and making simple websites
        with HTML and CSS. Now, my speciality is in web development, to which I
        bring a full-stack approach because I appreciate having the entire
        picture of projects I work on. I also maintain a deep interest in AI and
        machine learning as well as with learning and using cutting edge new
        technologies. To find out more about what I have been working on
        recently, please check out my projects.
        <div className="about-btns">
          <Button
            className="abt-btn"
            onClick={() => nav.history.push('/projects')}
            color="info">
            Projects
          </Button>
        </div>
      </p>
      <div className="technologies">
        <div className="tech-title">Skills</div>
        <hr className="my-2" />
        <div>Languages: JavaScript, Python, HTML, CSS</div>
        <div>
          Front-End: React, Redux, React Native, Sass, Bootstrap, Webpack,
          Next.js
        </div>
        <div>
          Back-End: Node.js, Express, Flask, REST, Sequelize, Express Session,
          JWTs
        </div>
        <div>Databases: SQL, PostgreSQL, DynamoDB</div>
        <div>Version Control: Git</div>
        <div>AWS: EC2, Lambda, RDS, Cognito, S3, CloudFront, Route 53</div>
        <div>Techniques: Agile Methodology, Test Driven Development</div>
        <a
          href="https://s3.amazonaws.com/daleighan.com/Alexander+Leigh+Resume.pdf"
          target="_blank">
          Resume
        </a>
      </div>
    </div>
  </Container>
);

export default About;
