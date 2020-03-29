import React from 'react'
import dataxp from '../data-xp'
import TimelineItem from '../components/TimelineItem'

const Timeline = () => dataxp.length > 0 &&  (
  <div className='timeline-container'>
    <div className='title-container'>
      <h1 className='xp-title'>EXPERIENCE</h1>
    </div>
    {dataxp.map((data, i) =>  (
      <TimelineItem data={data} key={i} />
    ))}
    <div className='circle-container'>
      <div className='end-circle'> </div>
    </div>
  </div>
)
  

export default Timeline
