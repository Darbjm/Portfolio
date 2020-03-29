import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const TimelineItem = ({ data }) => (
  <div className='timeline-item'>
    <div className='timeline-item-content'>
      <h2>{data.location}</h2>
      <div className='grey'></div>
      <h3>{data.date}</h3>
      <p>{data.occ}</p>
      <div>
      <span className='circle'></span>
      </div>
    </div>
  </div>
)

export default TimelineItem