import React from 'react';
import propTypes from 'prop-types';

const TimelineItem = ({ data }) => (
  <div
    className="timeline-item"
    data-aos="fade-up"
    data-aos-offset="400"
    data-aos-duration="2000"
  >
    <div className="timeline-item-content">
      <h2>{data.location}</h2>
      <div className="grey"></div>
      <p>{data.date}</p>
      <h4>{data.occ}</h4>
      <div>
        <span className="circle"></span>
      </div>
    </div>
  </div>
);

export default TimelineItem;

TimelineItem.propTypes = {
  data: propTypes.string,
};
