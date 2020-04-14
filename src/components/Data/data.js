const projectsData = [
  {
    image: 'draw',
    logo: 'connect',
    text: 'Developed a cowboy themed connect 4 game. Can be played with one or two players.',
    time: '10 days',
    title: 'Connect draw',
    skills: ['JavaScript', 'HTML', 'CSS'],
    team: 'Solo project',
    app: 'https://darbjm.github.io/Connet-draw/',
    github: 'https://github.com/Darbjm/Connet-draw'
  },
  {
    image: 'que',
    logo: 'ry',
    text: 'Consuming the Google Books API and using Axios to allow for the search of books by name or category. It has pagination',
    time: '2 days',
    title: 'Query',
    skills: ['React.js', 'Node.js', 'Bulma', 'JavaScript', 'JSON', 'HTML', 'SASS'],
    team: 'Team of two',
    app: 'https://query-ga.herokuapp.com/',
    github: 'https://github.com/Darbjm/Query'
  },
  {
    image: 'iro',
    logo: 'ny',
    text: 'A small self-initiated project to practise building a full-stack RESTful MERN app that allowed users to create their own ironic heros.',
    time: '5 days',
    title: 'Irony',
    skills: ['React.js', 'Node.js', 'Bulma', 'JavaScript', 'JSON', 'HTML', 'SASS'],
    team: 'Solo project',
    app: 'https://irony-ga.herokuapp.com/',
    github: 'https://github.com/Darbjm/Irony'
  },
  {
    image: 'chow',
    logo: 'vow',
    text: 'Implemented a single model RESTful API using Express and MongoDB working with a React front-end that utilized an interactive Mapbox and Cloudinary. I was responsible for creating over 60 tests with Mocha and Chai, building the interactive searchable mapox with users and their images as markers that link to profiles and the offers page meaning users can send each other requests to collaborate and decline or delete them, as well as a few other small features.',
    time: '7 days',
    title: 'ChowVow',
    skills: ['React.js', 'Node.js', 'Bulma', 'JavaScript', 'JSON', 'HTML', 'SASS'],
    team: 'Team of four',
    app: 'https://chowvow-ga.herokuapp.com',
    github: 'https://github.com/Darbjm/ChowVow-group-project'
  },
  {
    image: 'Jour',
    logo: 'no',
    text: '	A two model RESTful API using a Django back end and a React front end. I recreated the Mapbox from ChowVow with Hooks. The user is able to add images using Cloudinary and the forms will show the user of any mistakes with his inputs.',
    time: '7 days',
    title: 'Journo',
    skills: ['React.js with Hooks', 'Node.js', 'Django', 'PostgreSQL', 'Python', 'JavaScript', 'Bulma', 'JSON', 'HTML', 'SASS'],
    team: 'Solo project',
    app: 'https://journo-ga.herokuapp.com/',
    github: 'https://github.com/Darbjm/Journo'
  },
    // {
  //   text: 'Using Twilio and Yandex a user can send a message via SMS in any language.',
  //   time: '4 hours',
  //   title: 'Twilio Translation',
  //   skills: ['React.js', 'Twilio', 'Yandex', 'Node.js', 'JSON', 'HTML', 'SASS', 'Insomnia', 'Z shell'],
  //   team: 'Team of two',
  //   app: 'na',
  //   github: 'na'
  // },
  // {
  //   text: '	PHP',
  //   time: 'PHP',
  //   title: 'PHP',
  //   skills: ['PHP'],
  //   team: 'PHP',
  //   app: 'PHP',
  //   github: 'PHP'
  // },
  // {
  //   text: '	GO',
  //   time: 'GO',
  //   title: 'GO',
  //   skills: ['GO'],
  //   team: 'GO',
  //   app: 'GO',
  //   github: 'GO'
  // },
]

export default projectsData

{/* <div className='timeline-item'>
<div className='timeline-item-content'>
  <h1>{data.title}</h1>
  {data.skills && data.skills.map((skill, i) => <h4 key={i}>{skill}</h4>)}
  <h2>{data.team} • {data.time}</h2>
  <p>{data.text}</p>
  <div>
  <a href={data.app} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLink} size='lg' /></a> <a href={data.github} target='_blank'  rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} size='lg' /></a>
  <span className='circle'></span>
  </div>
</div>
</div> */}