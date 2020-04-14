import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Project = ({ data }) => (
  <div className='project-item'>
    <div className='project-image'>
      <div className='proj-image-container'>
        <div className={data.image} ></div>
      </div>
    </div>
      <div className='project-text'>
        <div className='project-logo'>
          <div className={data.logo} ></div><div className="grey fivepx"></div>
        </div>
      <div className='skills'>{data.skills.map((skill, i) => <p key={i}>{i > 0 && '|'} {skill}</p>)}</div>
        <h2>{data.time} • {data.team}</h2>
        <p>{data.text}</p>
      <div className='buttons'><a className='button' href={data.app} rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={faLink} size='sm' className='fontawesome'/>Open Project</a> <a className='button' href={data.github} rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={faGithub} size='sm' className='fontawesome'/>View on Github</a></div>
    </div>
  </div>
)

export default Project
