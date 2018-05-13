import React, {Component} from 'react';
import ProjectsEntry from './ProjectsEntry';
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
          <div>Loading...</div>
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
        <div className="about-btns">
          <Button
            className="abt-btn"
            onClick={() => window.open('/Alexander+Leigh+Resume.pdf', '_blank')}
            color="info">
            My Resume
          </Button>
        </div>
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
