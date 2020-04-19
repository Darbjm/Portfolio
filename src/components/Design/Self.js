import React from 'react'
import Gallery from 'react-photo-gallery';
import projects from './designdata/Projectsdata'
const Self = () => {
  return(
    <section className='self'>
      <h1>SELF-INITIATED PROJECTS</h1>
      {projects.map((project, i) => (
      <div className='project'>
      <div className={project.row} key={i} >
        <div className={project.single}>
          <img src={project.logo} alt={project.logo} className={project.logoclass}/>
          <div class='grey fivepx'></div>
          <h4>{project.subtitle}</h4>
          <p>{project.text}</p>
          {project.video && <iframe title='Video' src={project.video} width='100%' height='400' frameborder='0' allowfullscreen></iframe>}
        </div>
      <div className='gallery'>
        <Gallery photos={project.photos} />
      </div>
      </div>
      {project.extra && <div className='extra-column'><h1>Consumer Journey:</h1><div className='extra'>{project.extra.map((image, i) => (<img className='extra-image' src={image} alt={image} />))}</div></div>}
      </div>))}
      <div id='web' className='projects-image'></div>
    </section>
  )
}

export default Self