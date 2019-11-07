import './Clock.scss';
import React from 'react';

const Clock = (props) => {
  return (
    <div className="Clock">
      <div className="Clock-secondhand" id="second"></div>
      <div className="Clock-longhand" id="long"></div>
      <div className="Clock-shorthand" id="short"></div>
    </div>
  );
};

export default Clock;
