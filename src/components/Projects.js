import React, {Component} from 'react';
import ProjectsEntry from './ProjectsEntry';
import {Container, CardGroup} from 'reactstrap';
import {initialFetch, setProject} from '../../store/actions/projectActions';
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
    const {projectsFetched, projects, setProject, nav} = this.props;
    return (
      <div className="projects-body">
        <h2 className="projects-header">Here are some of my most recent projects:</h2>
        {!projectsFetched ? (
          <div>Projects Not Fetched</div>
        ) : (
          <CardGroup>
            {projects.map(project => (
              <ProjectsEntry
                project={project}
                setProject={setProject}
                nav={nav}
                key={project.projectName}
              />
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
    setProject: bindActionCreators(setProject, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
