import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchProject} from '../../store/actions/projectActions';
import {Container, Button} from 'reactstrap';
import '../../scss/projectStyles.scss';

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
    const {nav, projectsFetched, projects, currentProject} = this.props;
    console.log(this.props);
    return (
      <div className="project-center">
        {!projectsFetched ? (
          <div>Loading</div>
        ) : (
          <Container className="project-holder">
            <div className="back-button-holder">
              <Button
                onClick={() => nav.history.push('/projects')}
                color="info">
                Back
              </Button>
            </div>
            <h2 className="display-3">{currentProject.projectName}</h2>
            <hr className="my-2" />
            <div className="link-box">
              {currentProject.projectUrl ? (
                <span className="link-holder">
                  <a className="project-link" href={currentProject.projectUrl}>
                    <img className="link-icon" src="link-symbol-black.png" />
                    {'     '}See The App
                  </a>
                </span>
              ) : null}
              {currentProject.githubUrl ? (
                <span className="link-holder">
                  <a className="project-link" href={currentProject.githubUrl}>
                    <img className="link-icon" src="github-box-black.png" />
                    {'     '}See The Code
                  </a>
                </span>
              ) : null}
            </div>
            <div className="description">
              {currentProject.description}
            </div>
          </Container>
        )}
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
