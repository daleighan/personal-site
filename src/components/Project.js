import React, {Component} from 'react';
import {Redirect} from 'react-router';
import scrollToTop from './scrollToTop';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchProject} from '../../store/actions/projectActions';
import {Container, Button, UncontrolledCarousel} from 'reactstrap';
import Loading from './Loading';
import ProjectLinks from './ProjectLinks';
import StackHolder from './StackHolder';
import '../../scss/projectStyles.scss';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id} = this.props.nav.match.params;
    const {projectsFetched, fetchProject, nav} = this.props;
    if (!projectsFetched) {
      fetchProject(id);
    }
  }

  render = () => {
    const {nav, projectsFetched, projects, currentProject} = this.props;
    return (
      <div className="project-center">
        {!projectsFetched ? (
          <Loading projectFetched={projectsFetched} />
        ) : (
          <Container className="project-holder">
            {currentProject !== null ? (
              <div>
                <div className="back-button-holder">
                  <Button
                    onClick={() => {
                      nav.history.push('/projects');
                      scrollToTop(200);
                    }}
                    color="info">
                    Back
                  </Button>
                </div>
                <h2 className="display-3">{currentProject.projectName}</h2>
                <hr className="my-2" />
                <ProjectLinks currentProject={currentProject} />
                <div className="carousel-holder">
                  <UncontrolledCarousel
                    autoPlay={false}
                    items={currentProject.pictures}
                  />
                </div>
                <hr className="my-2" />
                <div className="description">{currentProject.description}</div>
                <StackHolder currentProject={currentProject} />
              </div>
            ) : (
              <Redirect to="/" />
            )}
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
