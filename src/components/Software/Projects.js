import React from 'react'
import projectsData from '../Data/data'
import Project from './Project'
import projects from '../Design/designdata/Projectsdata';

class Projects extends React.Component {
  state = {
    width: 0,
    height: 0
  }

  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  render() {
    const { width } = this.state
    return(
      <div className='projects-container'>
        {projectsData.map((data, i) =>  (
          <div key={data.app}>
            {i > 0 && <div className='gap' key={i}></div>}
            <Project data={data} key={data.title} width={width}/>
          </div>
        ))}
        {projects.map((data, i) =>  (
          <div key={i}>
            <div className='gap' key={i}></div>
            <div className='design-item'>
              {i === 0 && <h1>Design Based Projects</h1>}
              <div className='designpro'>
                <div className='designmap' data-aos={width > 1123 ? data.fade : 'zoom-in-down'} data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
                  {data.photos.map(photo => <img key={photo.src} src={photo.src} alt={photo.number} className='designimage'/> )}
                </div>
                <div className='designtext' data-aos='fade-zoom-in' data-aos-offset={width > 1366 ? '200' : '100'} data-aos-easing='ease-out-cubic' data-aos-duration='2000' data-aos-delay='1000'>
                  <img src={data.logo} alt={data.logo} className='designlogo'/><div className='grey fivepx'></div>
                  <h2>{data.subtitle}</h2>
                  {data.text && data.text.map((para, i) => (
                    <div key={i}><p>{para}</p><br/></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className='check'><h2>CHECK OUT MORE PROJECTS IN THE NAVBAR DROPDOWN</h2></div> */}
      </div>
    )
  }
}

export default Projects
