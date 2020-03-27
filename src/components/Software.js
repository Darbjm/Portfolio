import React from 'react'
import Header from './Animation-header'
import Bubbles from './bubbles'

class Software extends React.Component {

  render() {
  return (
      <>
      <Header/>
      <main className='main'>
      <section className='statement'>
        <div className='container-one'>
          <div className='text'>
            <h4>About</h4><h5>Software Engineer/ Designer</h5>My passion for solutions is perfectly suited to software development. As <strong className='primary'>a fast learner,</strong> I have experience in a <strong className='primary'>vast array of hard skills,</strong> but found nothing as satisfying as OOP. These skills coupled with <strong className='primary'>winning a design award from the Design Museum</strong> have taught me that attention to detail and deep knowledge are vital. 
            <br/> <br/>Having always been interested in tech I <strong className='primary'>designed a 1st grade app</strong> while at Central St Martins and continued its development after graduating. I have worked within digital creative teams with clients such as <strong className='primary'>Nike, Bombay Sapphire, Havaianas, and Bacardi.</strong> Whilst there I took on extra work teaching myself to upgrade hardware, setup and update our server networks and clients' websites.
            <br/> <br/>I understand I have barely scratched the surface of what is possible and look forward to <strong className='primary'>broadening and specialising my skills,</strong> whilst exploring technologies and techniques to <strong className='primary'>create new efficient systems.</strong>
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
        <div className='statement-image'>
        </div>
      </section>
      <section className='projects'>
      Connect Draw - Vanilla JavaScript - Solo project • 10 days darbjm.github.io/connet-draw
        Developed a cowboy themed connect 4 game. Can be played with one or two players.
        Book search - React - Team of Two • 2 days books-project-ga.herokuapp.com
        Consuming the Google Books API and using Axios to allow for the search of books by name or category, with pagination.
        Ironic heros Full Stack - Express React - Solo project • 1 week ironic-heros-ga.herokuapp.com
        Created a 2 model RESTful API using Express and MongoDB coupled with a React front-end. This One-to-many relationship allowed users to create their own ironic heros.
        Twilio Translation app - React - Solo project • 1 day
        Using Twilio and Yandex a user can send a message via SMS in any language.
        ChowVow Full Stack - Express React - Team of Four • 1 week https://chowvow-group-project.herokuapp.com
        Implemented a single model RESTful API using Express and MongoDB working with a React front-end that utilized an interactive Mapbox and Cloudinary. I was responsible for creating over 60 tests with Mocha and Chai, building the interactive searchable mapox with users and their images as markers that link to profiles and the offers page meaning users can send each other requests to collaborate and decline or delete them, as well as a few other small features.
        Journo - Django React with Hooks - Solo project • 1 week https://travel-diary-ga-project.herokuapp.com							A two model RESTful API using a Django back end and a React front end. I recreated the Mapbox from ChowVow with Hooks. The user is able to add images using Cloudinary and the forms will show the user of any mistakes with his inputs.
      </section>
      <section className='projects-image'>
      </section>
      <section className='experiance'>
    </section>
    </main>
    </>
  )
}
}

export default Software


