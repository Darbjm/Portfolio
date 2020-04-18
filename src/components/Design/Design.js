import React from 'react'
import NavbarDesign from '../Common/NavbarDesign'
import Header from './Header'
import Clients from './Clients'

class Design extends React.Component {
  render() {
    return (
      <>
      <NavbarDesign />
      <Header />
      <section className='border'>
        <div className='history'>
          <div className='history-card'>
            I started out my career in <strong className='primary'>Design</strong> because I was motivated by <strong className='primary'>optimisation</strong> and <strong className='primary'>balance.</strong> I use <strong className='primary'>Design Thinking, Hegel’s Dialectics</strong> and a broad variety of skills to approach a problem.<br/><br/>
      
            At <strong className='primary'>Central St Martins</strong> I studied <strong className='primary'>Product Design,</strong> practised with other creatives and joined and led many societies like the <strong className='primary'>philosophy society</strong> that influenced me.
            It was here I received my <strong className='primary'>award from the design museum,</strong> acquired Design Thinking as a skill and gained an understanding of innovation.
             I had my first taste of the <strong className='primary'>tech industry</strong> as I designed and prototyped an app.<br/><br/>

            At <strong className='primary'>Alter Agency</strong> I was the <strong className='primary'>In-House Photographer</strong> and a <strong className='primary'>Graphic and Web Designer.</strong>
             Working in the highly competitive marketing industry I was part of a small team that won clients such as Nike and Bombay Sapphire and continuing to work with Bacardi, Havaianas, JD Sports, King's Ginger and Alcatel.
            This gave me an understanding of <strong className='primary'>project management, production, and presentation.</strong>
          </div>
        </div>
        <div className='header-image' id='Clients'></div>
      </section>
      <Clients />
      </>
    )
  }
}

export default Design