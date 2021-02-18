import React from 'react';
import LazyLoad from 'react-lazy-load';
import projects from './designdata/Projectsdata';

const Self = () => (
  <section className="self" id="award">
    <div className="title-decoration">
      <h1>SELF-INITIATED PROJECTS</h1>
    </div>
    {projects.map((project, i) => (
      <div className="project" key={i}>
        <div className={project.row}>
          <div className={project.single}>
            <img
              src={project.logo}
              alt={project.logo}
              className={project.logoclass}
            />
            <div className="grey fivepx"></div>
            <h4>{project.subtitle}</h4>
            {project.text &&
              project.text.map((para, i) => (
                <div key={i}>
                  <p>{para}</p>
                  <br />
                </div>
              ))}
          </div>
          <div className="gallery">
            {project.photos &&
              project.photos.map((photo, i) => (
                <LazyLoad key={i} offsetVertical={1000} debounce={false}>
                  <img
                    className="gallery-images"
                    id={photo.id}
                    src={photo.src}
                    alt={photo.src}
                    key={photo.number}
                  />
                </LazyLoad>
              ))}
          </div>
        </div>
      </div>
    ))}
    <div id="web" className="projects-image"></div>
  </section>
);

export default Self;
