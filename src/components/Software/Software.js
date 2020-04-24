import React from 'react'
import Header from './Animation-header'
import Bubbles from './bubbles'
import Timeline from './Timeline'
import Projects from './Projects'
import Navbar from '../Common/Navbar'

class Software extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
  return (
      <main>
      <Navbar />
      <Header/>
      <div className='main'>
      <section id='statement' className='statement'>
        <div className='container-one'>
          <div className='text'>
            <div className='center'>
              <div className='profilePic'></div>
              </div>
              <h1>I'M HIGHLY CREATIVE<div className='grey fivepx'></div></h1> 
              <div className='body'>
                From software to hardware to design to photography and art, learning new skills that allow me to create and help others has great meaning for me. As <strong className='primary'>a fast learner,</strong> I have experience in a <strong className='primary'>vast array of hard skills,</strong> but found nothing as satisfying as OOP. These skills coupled with <strong className='primary'>winning an award from the Design Museum</strong> have taught me that attention to detail and deep knowledge are vital. 
                <br/> <br/>Having always been interested in tech I <strong className='primary'>designed a 1st grade app</strong> while at Central St Martins and continued its development after graduating. I have worked within digital creative teams with clients such as <strong className='primary'>Nike, Bombay Sapphire, Havaianas, and Bacardi.</strong> Whilst there I took on extra work teaching myself to upgrade hardware, setup and update our server networks and clients' websites.
                <br/> <br/>I understand I have barely scratched the surface of what is possible and look forward to <strong className='primary'>broadening and specialising my skills,</strong> whilst exploring technologies and techniques to <strong className='primary'>create new efficient systems.</strong> Check out the design, photography and artwork pages in the navbar dropdown.
              </div>
          </div>
          <div className='skills'>
            <div className='bubbles'>
              <Bubbles/>
              Python, Django, JS, React, Hooks, Node.js, Express, Babel, Webpack, Mocha, Chai, Sass, Bulma.
              Git, GitHub, Z shell, TablePlus, Robo 3T, Insomnia, Heroku, Mapbox, Twilio, Cloudinary, Yandex, Google & React Devtools, Slack.
              SQL, PostgreSQL, MongoDB
              Design Thinking, User-centered Design, Teamwork, Public speaking, Creativity.
              Synology, SolidWorks, Rhino, C4D, Adobe Suite, Wordpress, Trello, Photography.
            </div>
          </div>
        </div>
        <div  id='projects' className='statement-image'>
        </div>
      </section>
      <section className='projects'>
        <div className='container-two'>
          <h1>PROJECTS</h1>
          <Projects />
        </div>
        <div id='experiance' className='projects-image'></div>
      </section>
      <section className='experiance'>
        <div className='container-three'>
          <Timeline />
        </div>
        <div className='xp-image'></div>
      </section>
    </div>
    </main>
  )
}
}

export default Software


