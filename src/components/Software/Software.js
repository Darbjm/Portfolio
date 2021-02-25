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
                  James studied Product Design focusing on software at Central
                  Saint Martins. From earning awards from the design museum to
                  revolutionary results in app design his strong creativity and
                  love of innovation lead him into software engineering where he
                  already has one year’s experience.<br></br>
                  <br></br>
                  Being voted in as the SU president, social exec and MVP of
                  sport, captain of rugby and treasurer of philosophy society,
                  James found that will power is an important factor for
                  success. This combined with patience and problem solving
                  allows him to fix tricky issues for clients such as Nike,
                  Bacardi, and JD. When other contractors failed to deliver for
                  Bombay Sapphire, James stepped up working to design and
                  execute the full user journey the next day for their first
                  highly successful activation.<br></br>
                  <br></br>
                  He loves pushing himself to become indispensable in high
                  energy teams producing efficient, DRY code with a strong
                  emphasis on innovation, learning, honesty and ownership.
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
