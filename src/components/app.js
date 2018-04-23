import React, {Component} from 'react';
import Header from './Header';
import Routes from './Routes';
import {initialFetch, decreaseProp} from '../../store/actions/projectActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {initialFetch} = this.props;
    initialFetch();
  }
  render = () => {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  };
}

const mapStateToProps = ({projectReducer}) => {
  return {
    projects: projectReducer.projects,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initialFetch: bindActionCreators(initialFetch, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
