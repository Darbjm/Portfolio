import React from 'react';
import Header from './Animation-header';
import BubbleWrapper from './BubbleWrapper';
import Timeline from './Timeline';
import Projects from './Projects';
// import Navbar from '../Common/Navbar';
// import Self from '../Design/Self';

class Software extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  renderChart = () => {
    const { width } = this.state;
    if (width === 0) {
      return 'No data yet';
    }

    if (width > 1800) {
      return (
        <div>
          <BubbleWrapper width={width} />
        </div>
      );
    }
    if (width < 1799 && width > 1499) {
      return <BubbleWrapper width={width} />;
    }
    if (width < 1498 && width > 1300) {
      return (
        <div>
          <BubbleWrapper width={width} />
        </div>
      );
    }
    if (width < 1300 && width > 1023) {
      return <BubbleWrapper width={width} />;
    }
    if (width < 1023 && width > 767) {
      return (
        <div>
          <BubbleWrapper width={width} />
        </div>
      );
    }
    if (width < 767 && width > 417) {
      return <BubbleWrapper width={width} />;
    }
    if (width <= 417) {
      return (
        <div>
          <BubbleWrapper width={width} />
        </div>
      );
    }
  };

  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Header />
        <main className="main">
          <section id="statement" className="statement">
            <div className="container-one">
              <div className="text">
                <div className="center">
                  <div className="profilePic"></div>
                </div>
                <h1>
                  A CREATIVE<div className="grey fivepx"></div>
                </h1>
                <div className="body">
                  I’m a software engineer with award winning design skills from
                  Central Saint Martins<br></br>
                  <br></br>
                  Studying product design, I specialised in software, creating a
                  top grade app that changed the course guidelines for future
                  years.<br></br>
                  <br></br>
                  Having experience as a graphic designer and web developer
                  taught me a lot about front end development, and although my
                  strengths currently lie there I love working on the back end.
                </div>
              </div>
              <div className="skills">
                <div className="bubbles">
                  <h1>SKILLS:</h1>
                  {this.renderChart()}
                </div>
              </div>
            </div>
            <div id="projects" className="statement-image"></div>
          </section>
          <section className="projects">
            <div className="container-two">
              <h1>PROJECTS</h1>
              <Projects />
            </div>
            <div id="experiance" className="projects-image"></div>
          </section>
          <section className="experiance">
            <div className="container-three">
              <Timeline />
            </div>
            <div className="xp-image"></div>
          </section>
        </main>
      </>
    );
  }
}

export default Software;
