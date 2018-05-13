import React from 'react';

const ResumeButton = () => (
  <div className="about-btns">
    <Button
      className="abt-btn"
      onClick={() => window.open('/Alexander+Leigh+Resume.pdf', '_blank')}
      color="info">
      My Resume
    </Button>
  </div>
);

export default ResumeButton;
