import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchProject} from '../../store/actions/projectActions';
import {Container, Button, UncontrolledCarousel} from 'reactstrap';
import '../../scss/projectStyles.scss';

const items = [
  {
    src:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    caption: 'Slide 1',
  },
  {
    src:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    caption: 'Slide 2',
  },
  {
    src:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    caption: 'Slide 3',
  },
];

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
    if (currentProject) {
      console.log(currentProject.pictures);
    }
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
            <div className="description">{currentProject.description}</div>
            <div className="carousel-holder">
              <UncontrolledCarousel items={currentProject.pictures} />
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
