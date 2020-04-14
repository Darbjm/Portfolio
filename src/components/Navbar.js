import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  state = { navbarOpen: false }
  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {
    const { navbarOpen } = this.state
    return (
      <nav className='navbar is-fixed-top'>
          <div className='navbar-brand'>
            <Link className='navbar-item' to='/'>
              <div className='logo'/>
            </Link>
            <div className={`navbar-burger burger ${navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
              <span className='primary'></span>
              <span className='primary'></span>
              <span className='primary'></span>
            </div>
          </div>
          <div className={`navbar-menu ${navbarOpen ? 'is-active' : ''}`}>
            <div className='navbar-start'>
              <div className='navbar-item has-dropdown is-hoverable'>
                <Link className='navbar-link' to='/'>
                  Software Engineering
                </Link>
                <div className='navbar-dropdown is-boxed'>
                  <Link className='navbar-item' to='/design'>
                    Design
                  </Link>
                  <Link className='navbar-item' to='/photography'>
                    Photography
                  </Link>
                  <Link className='navbar-item' to='/art'>
                    Fine Art
                  </Link>
                </div>
              </div>
            </div>
            <div className='navbar-end'>
              <Link className='navbar-item' to='/heros'>Statement</Link>
              <Link className='navbar-item' to='/heros'>Projects</Link>
              <Link className='navbar-item' to='/heros'>Experiance</Link>
            </div>
          </div>
      </nav>
    )
  }
}

export default Navbar