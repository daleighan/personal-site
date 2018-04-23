import React, {Component} from 'react';
import {initialFetch} from '../../store/actions/projectActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Jumboron} from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {initialFetch} = this.props;
    initialFetch();
  }

  render = () => {
    return <div>Home</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

