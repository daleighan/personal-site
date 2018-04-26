import React, {Component} from 'react';
import {initialFetch} from '../../store/actions/projectActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Jumbotron, Button} from 'reactstrap';
import Typist from 'react-typist';
import '../../scss/homeStyles.scss';
import '../../node_modules/react-typist/dist/typist.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {projectsFetched, initialFetch} = this.props;
    if (!projectsFetched) {
      initialFetch();
    }
  }

  render = () => {
    const {projectsFetched, nav} = this.props;
    return (
      <div className="container outer">
        <Jumbotron className="center-jumbotron">
          <h1 className="welcome">
            <Typist className="welcome-head" speed={45} startDelay={1500}>
              Welcome to my portfolio page!
            </Typist>
          </h1>
          <div className="subtitle">
            <hr className="my-2" />
            <div className="welcome">
              Please use the navbar at the top of the page to find out a little bit
              more about me, my work and my philosophy.
            </div>
          </div>
          <Button onClick={() => nav.history.push('/about')} className="info-button" color="info">Learn More</Button>
        </Jumbotron>
      </div>
    );
  };
}

const mapStateToProps = ({projectReducer}) => {
  return {
    projectsFetched: projectReducer.projectsFetched,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initialFetch: bindActionCreators(initialFetch, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
