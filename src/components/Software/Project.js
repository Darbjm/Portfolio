import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


class Project extends React.Component {
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
  const { data } = this.props
  const { width } = this.state
  return (
  <div className='project-item'>
    <div className='project-image'>
      <div className='proj-image-container'>
        <div className={data.image} data-aos={width > 1366 ? data.fade : 'zoom-in-down'} data-aos-offset={width > 1366 ? '500' : '400'} data-aos-easing='ease-out-cubic' data-aos-duration='1500'></div>
      </div>
    </div>
      <div className='project-text' data-aos='fade-zoom-in' data-aos-offset={width > 1366 ? '200' : '100'} data-aos-easing='ease-out-cubic' data-aos-duration='2000' data-aos-delay='1000'>
        <div className='project-logo'>
          <div className={data.logo} ></div><div className='grey fivepx'></div>
        </div>
      <div className='skills'>{data.skills.map((skill, i) => <p key={i}>{i > 0 && '|'} {skill}</p>)}</div>
        <h2>{data.time} • {data.team}</h2>
        <p>{data.text}</p>
      <div className='buttons'><a className='button' href={data.app} rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={faLink} size='sm' className='fontawesome'/>Open Project</a> <a className='button' href={data.github} rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={faGithub} size='sm' className='fontawesome'/>View on Github</a></div>
    </div>
  </div>
  )
  }
}

export default Project
