import React, {Component} from 'react';
import ProjectsEntry from './ProjectsEntry';
import Loading from './Loading';
import {Container, CardGroup, Button} from 'reactstrap';
import Typist from 'react-typist';
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
      <Container className="projects-body">
        <h2 className="projects-header">
          Here are some of my most recent projects
        </h2>
        {!projectsFetched ? (
          <Loading projectsFetched={projectsFetched} />
        ) : (
          <CardGroup className="project-cards">
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
      </Container>
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
