import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {initialFetch} from '../../store/actions/projectActions';

class Project extends Component {
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
    const {projectsFetched, projects} = this.props;
    return (
      <div>
        {!projectsFetched ? (
          <div>Loading</div>
        ) : (
          <div>Empty Project Page</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Project);
