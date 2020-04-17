import React from 'react'
import NavbarDesign from '../Common/NavbarDesign'

class Design extends React.Component {
  render() {
    return (
      <>
      <NavbarDesign />
      <main className='main'>
        <section className='header'>
          <div className='design'>
            <h1>DESIGN</h1>
          </div>
        </section>
      </main>
      </>
    )
  }
}

export default Design