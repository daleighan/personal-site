import React from 'react';

const LinkBox = ({currentProject}) => (
  <div className="link-box">
    {currentProject.projectUrl ? (
      <span className="link-holder">
        <a className="project-link" target="_blank" href={currentProject.projectUrl}>
          <img className="link-icon" src="link-symbol-black.png" />
          <div>See The Project</div>
        </a>
      </span>
    ) : null}
    {currentProject.githubUrl ? (
      <span className="link-holder">
        <a className="project-link" target="_blank" href={currentProject.githubUrl}>
          <img className="link-icon" src="github-box-black.png" />
          <div>See The Code</div>
        </a>
      </span>
    ) : null}
  </div>
);

export default LinkBox;
