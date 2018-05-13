import React from 'react';

const StackHolder = ({currentProject}) => (
  <div className="stack-holder">
    <div className="tech-stack">
      <div className="stack-title">Tech Stack</div>
      <hr className="my-2" />
      {currentProject.techStack
        .split('\n')
        .map(line => <div className="stack-item">{line}</div>)}
    </div>
  </div>
);

export default StackHolder;
