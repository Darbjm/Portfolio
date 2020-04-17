import React from 'react'

const TimelineItem = ({ data }) => (
  <div className='timeline-item' data-aos='fade-up' data-aos-offset='400'>
    <div className='timeline-item-content'>
      <h2>{data.location}</h2>
      <div className='grey'></div>
      <p>{data.date}</p>
      <h4>{data.occ}</h4>
      <div>
      <span className='circle'></span>
      </div>
    </div>
  </div>
)

export default TimelineItem