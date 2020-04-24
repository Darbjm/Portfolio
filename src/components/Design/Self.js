import React from 'react'
import Gallery from 'react-photo-gallery';
import projects from './designdata/Projectsdata'
const Self = () => {
  return(
    <section className='self' id='award'>
      <div className='title-decoration'>
        <h1>SELF-INITIATED PROJECTS</h1>
      </div>
      {projects.map((project, i) => (
      <div className='project' key={i}>
      <div className={project.row} >
        <div className={project.single}>
          <img src={project.logo} alt={project.logo} className={project.logoclass}/>
          <div className='grey fivepx'></div>
          <h4>{project.subtitle}</h4>
          {project.text && project.text.map((para, i) => (
          <div key={i}><p>{para}</p><br/></div>
        ))}
        </div>
      <div className='gallery'>
        <Gallery photos={project.photos} key={project.photos}/>
      </div>
      </div>
      {project.extra && <div className='extra-column'><h1>Consumer Journey:</h1><div className='extra'>{project.extra.map((image, i) => (<img className='extra-image' src={image} alt={image} />))}</div></div>}
      </div>))}
      <div id='web' className='projects-image'></div>
    </section>
  )
}

export default Self