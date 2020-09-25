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
                  As a creative engineer, I’ve found knowing the intricacies and
                  use cases for a technique or tool increases’ my confidence and
                  creativity leading to strong solutions and excellent
                  problem-solving. For example, during my time at WalkUp app,
                  our seated guests increased by over 1.7 million.
                  <br /> <br />
                  Creating award-winning designs, I’m keen to combine my
                  creativity with deep technical skills to produce user-centred
                  results from researched insights and data. As a result of this
                  method, I helped Alcatel to reach #3 most sold smartphone
                  brand in the UK with 10.5% off the market share.
                  <br /> <br />
                  Shortly, I would like to learn about Microservices, design
                  patterns, and building efficient code for large systems.
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
