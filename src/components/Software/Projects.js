import React from 'react'
import projectsData from '../Data/data'
import Project from './Project'

const Projects = () => projectsData.length &&  (
  <div className='projects-container'>
      {projectsData.map((data, i) =>  (
        <div key={data.app}>
          {i > 0 && <div className='gap' key={i}></div>}
          <Project data={data} key={data.title} />
        </div>
      ))}
  </div>
)

export default Projects
