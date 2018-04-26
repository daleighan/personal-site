import React, {Component} from 'react';
import {initialFetch} from '../../store/actions/projectActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Jumbotron} from 'reactstrap';
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
    const {projectsFetched} = this.props;
    return (
      <div className="container outer">
        <Jumbotron className="center-jumbotron">
          <h1 className="welcome">
            <Typist className="welcome-head" speed={45} startDelay={1500}>
              Welcome to my portfolio!
            </Typist>
          </h1>
          <div className="subtitle">
            <hr className="my-2" />
            <div className="welcome">
              Please use the navbar at the top of the page to find out a little bit
              more about me, my work and my philosophy.
            </div>
          </div>
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
