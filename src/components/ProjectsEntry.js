import React from 'react';
import {Card, Button, CardTitle, CardImg, CardBody} from 'reactstrap';

const ProjectsEntry = ({project, setProject, nav}) => {
  const {projectName, pictures, blurb} = project;
  return (
    <Card>
      <CardTitle>{projectName}</CardTitle>
      <CardImg width="100%" src={pictures[0].src} alt={projectName} />
      <CardBody>{blurb}</CardBody>
      <Button
        onClick={() => setProject(project, nav)}
        className="btn-projects"
        color="info"
        size="sm">
        Learn More
      </Button>
    </Card>
  );
};

export default ProjectsEntry;
