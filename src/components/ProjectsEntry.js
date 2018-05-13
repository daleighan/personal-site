import React from 'react';
import scrollToTop from './scrollToTop';
import {Card, Button, CardTitle, CardImg, CardBody} from 'reactstrap';

const ProjectsEntry = ({project, setProject, nav}) => {
  const {projectName, pictures, blurb} = project;
  return (
    <Card>
      {project.featured ? (
        <img className="featured-banner" src="featured-ribbon.png" />
      ) : null}
      <CardTitle>{projectName}</CardTitle>
      <CardImg
        className="project-image"
        width="100%"
        src={pictures[0].src}
        alt={projectName}
      />
      <CardBody>{blurb}</CardBody>
      <Button
        onClick={() => {
          setProject(project, nav);
          scrollToTop(200);
        }}
        className="btn-projects"
        color="info"
        size="sm">
        Learn More
      </Button>
    </Card>
  );
};

export default ProjectsEntry;
