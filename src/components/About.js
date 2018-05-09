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
      <p>
        Hello, and welcome to my website! If you have made it here, I am
        guessing you would like to know a bit more about me and my work. I am a
        full-stack developer who brings a uniquely creative approach to what I
        do. My background from growing up and in college classical violin which
        I have now played and studied for over 20 years which has caused me to
        take an artistic approach to everything that I do. I have also had a
        love of technology and coding from a young age which started with coding
        games in Visual Basic and TI-Basic (for graphing calculators) and making
        simple websites with HTML and CSS when I was 10 and has continued to the
        present day. Now, my specialty is in web development, with which I take
        a truly full-stack approach to the work that I do because I really like
        having a full picture of the projects I work on. I also maintain a deep
        interest in AI and machine learning as well as with keeping current with
        the technologies I use. To find out more about what I have been working
        on recently, please look over to the projects section.
        <div className="about-btns">
          <Button className="abt-btn" onClick={() => nav.history.push('/projects')} color="info">
            My Projects
          </Button>
          <Button className="abt-btn" onClick={() => console.log('resume button')} color="info">
            My Resume
          </Button>
        </div>
      </p>
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
        <div>Other: Agile Methodology, Docker, Socket.io, Test Driven Development</div>
      </div>
    </div>
  </Container>
);

export default About;
