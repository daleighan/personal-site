import React from 'react';
import {Card, Button, CardTitle, CardImg, CardBody} from 'reactstrap';

const ProjectsEntry = ({project}) => {
  console.log(project);
  return (
    <Card>
      <CardTitle>{project.projectName}</CardTitle>
      <CardImg width="100%" src={project.pictures[0].src} alt={project.projectName} />
      <CardBody>{project.blurb}</CardBody>
    </Card>
  );
};

export default ProjectsEntry;
