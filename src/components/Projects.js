import React, {Component} from 'react';
import {initialFetch} from '../../store/actions/projectActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {initialFetch} = this.props;
    initialFetch();
  }

  render = () => {
    const {projectsFetched} = this.props;
    return (
      <div>
        {!projectsFetched ? (
          <div>Projects Not Fetched</div>
        ) : (
          <div>Projects Fetched</div>
        )}
      </div>
    );
  };
}

const mapStateToProps = ({projectReducer}) => {
  return {
    projectsFetched: projectReducer.projectsFetched,
    projects: projectReducer.projects,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initialFetch: bindActionCreators(initialFetch, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
