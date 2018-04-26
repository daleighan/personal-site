import React, {Component} from 'react';
import ProjectsEntry from './ProjectsEntry';
import {CardGroup} from 'reactstrap';
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
          <CardGroup>
            {projects.map(project => (
              <ProjectsEntry project={project} key={project.projectName} />
            ))}
          </CardGroup>
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
