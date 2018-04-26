import React, {Component} from 'react';
import ProjectsEntry from './ProjectsEntry';
import {initialFetch} from '../../store/actions/projectActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../../scss/projectsStyles.scss';

class Projects extends Component {
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
          <div>Projects Not Fetched</div>
        ) : (
          <div>
            {projects.map(project => (
              <ProjectsEntry project={project} key={project.projectName} />
            ))}
          </div>
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
