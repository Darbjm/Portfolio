import React from 'react'
import Header from './Animation-header'
import BubbleWrapper from './BubbleWrapper'
import Timeline from './Timeline'
import Projects from './Projects'
import Navbar from '../Common/Navbar'
import Self from '../Design/Self'

class Software extends React.Component {
  state = {
    width: 0,
    height: 0
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
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

  renderChart = () => {
    const { width } = this.state
    if (width === 0) {
      return 'No data yet'
    }

    if (width > 1800) {
      return <div><BubbleWrapper width={this.state.width} /></div>
    } if (width < 1799 && width > 1499) {
      return <BubbleWrapper width={this.state.width} />
    } if (width < 1498 && width > 1300) {
      return <div><BubbleWrapper width={this.state.width} /></div>
    } if (width < 1300 && width > 1023) {
      return <BubbleWrapper width={this.state.width} />
    } if (width < 1023 && width > 767) {
      return <div><BubbleWrapper width={this.state.width} /></div>
    } if (width < 767 && width > 417) {
      return <BubbleWrapper width={this.state.width} />
    } if (width <= 417) {
      return <div><BubbleWrapper width={this.state.width} /></div>
    }
  }

  render() {
    return (
      <main>
        {/* <Navbar /> */}
        <Header />
        <div className='main'>
          <section id='statement' className='statement'>
            <div className='container-one'>
              <div className='text'>
                <div className='center'>
                  <div className='profilePic'></div>
                </div>
                <h1>A CREATIVE<div className='grey fivepx'></div></h1>
                <div className='body'>
                  As a creative, I’ve found learning and perfecting new skills as both motivating and essential to creating my best work. Knowing the intricacies and use cases for a technique or tool increases my confidence and joy in the process and so leads to strong solutions. Therefore I’m careful to ask the right questions and understand the key insights of the project.
                  <br /> <br />As an award-winning Designer, I am keen to combine my creativity with deep technical skills to produce effective results from researched insights. I believe an effective way to achieve this goal is to be a self-aware and enthusiastic team member, learning from others is so useful to me.
                  <br /> <br />In the near future, I would like to improve my testing skills, learn about Micro-services, and how to write efficient code for apps with many users.
                </div>
              </div>
              <div className='skills'>
                <div className='bubbles'>
                  <h1>SKILLS:</h1>
                  {this.renderChart()}


                </div>
              </div>
            </div>
            <div id='projects' className='statement-image'>
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


