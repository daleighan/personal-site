import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchProject} from '../../store/actions/projectActions';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id} = this.props.nav.match.params;
    const {projectsFetched, fetchProject} = this.props;
    if (!projectsFetched) {
      fetchProject(id);
    }
  }

  componentDidUpdate() {
    const {projectsFetched, currentProject, nav} = this.props;
    if (projectsFetched && !currentProject) {
      nav.history.push('/');
    }
  }

  render = () => {
    const {projectsFetched, projects} = this.props;
    return (
      <div>
        {!projectsFetched ? <div>Loading</div> : <div>Empty Project Page</div>}
      </div>
    );
  };
}

const mapStateToProps = ({projectReducer}) => {
  return {
    projectsFetched: projectReducer.projectsFetched,
    projects: projectReducer.projects,
    currentProject: projectReducer.currentProject,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: bindActionCreators(fetchProject, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
