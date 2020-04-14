import React from 'react';
import WAVES from 'vanta/src/vanta.waves';
// import p5 from 'p5';
import * as THREE from 'three'

class Header extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      // p5: p5,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xd78b20,
      shininess: 0.00,
      waveHeight: 30.00,
      waveSpeed: 1.00,
      zoom: 1.8
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return (
    <header className='vanta' ref={this.vantaRef}>
      <div className='name'>
        <div className='color-box'>
          <strong>JAMES DARBY</strong>
          <h4>SOFTWARE ENGINEER</h4>
        </div>
      </div>   
    </header>
    )
  }
}

export default Header;