import React, { useState, useEffect } from 'react'
import Logo from '../../assets/Logo.svg'
import { HashLink as Link } from 'react-router-hash-link'

const NavbarDesign = () => {
  const [open, setOpen] = useState(false)
  const [animate, setAnimate] = useState(false)
  const toggleOpen = () => setOpen(!open)
  const startAnimate = () => setAnimate(true)
  const stopAnimate = () => setAnimate(false)

  useEffect(() => {
    setOpen(false)
  }, [])

    return (
      <nav className='navbar is-fixed-top'>
          <div className='navbar-brand'>
            <Link className='navbar-item' to='/'>
              <img className={animate ? 'spin logo' : 'logo'} src={Logo} alt='My logo'/>
            </Link>
            <div className={`navbar-burger burger ${open ? 'is-active' : ''}`} onClick={toggleOpen}>
              <span className='primary'></span>
              <span className='primary'></span>
              <span className='primary'></span>
            </div>
          </div>
          <div className={`navbar-menu ${open ? 'is-active' : ''}`}>
            <div className='navbar-start'>
              <div onMouseOver={startAnimate} onMouseOut={stopAnimate} className='navbar-item has-dropdown is-hoverable'>
                <Link className='navbar-link' to='/fineart'>
                  Fine Art
                </Link>
                <div onMouseOver={startAnimate} onMouseOut={stopAnimate} className='navbar-dropdown is-boxed'>
                  <Link className='navbar-item' to='/'>
                    Software Engineering
                  </Link>
                  <Link className='navbar-item' to='/design'>
                    Design
                  </Link>
                  <Link className='navbar-item' to='/photography'>
                    Photography
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </nav>
    )
}

export default NavbarDesign