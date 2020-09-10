import React from 'react';
import WAVES from 'vanta/src/vanta.waves';
// import p5 from 'p5';
import * as THREE from 'three';

class Header extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      // p5: p5,
      THREE,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xd78b20,
      shininess: 0.0,
      waveHeight: 30.0,
      waveSpeed: 1.0,
      zoom: 1.8,
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
      <header className="vanta" ref={this.vantaRef}>
        <div className="name">
          <div className="color-box">
            {/* change */}
            <strong>JAMES DARBY</strong>
            <h4>SOFTWARE ENGINEER</h4>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
