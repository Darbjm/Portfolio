import React from 'react'
import NavbarPhotography from '../Common/NavbarPhotography'
import Gallery from 'react-photo-gallery';
import product from './Photos';
import lifestyle from './Lifestyle'
import travel from './Travel';

class Photography extends React.Component {
  render() {
    return (
      <main>
        <NavbarPhotography />
        <section className='photography-header'>
          <div className='photography-image'>
            <div className='name'>
                <div className='color-box'>
                  <strong>JAMES DARBY</strong>
                  <h4>PHOTOGRAPHY</h4>
              </div>
            </div>
          </div>
        </section>
        <section className='photos' id='travel'>
          <div className='images-card'>
            In my spare time and while travelling I enjoy improving my photography skills. While at ALTER AGENCY I was the In-House Photographer working for companies such as Alcatel, Havaianas, Kings' Ginger, Rocket Dog and Gregory's Tree. I've subsequently worked with Nue Hoops, Copper Crew and UAL SU. I produced stop-motion videos, animations, product photography and lifestyle photography.
          </div>
          <div className='images'>
            <h1>TRAVEL</h1>
            <Gallery photos={travel}/>
          </div>
        </section>
        <section className='photos' id='product'>
          <div className='images'>
            <h1>PRODUCT PHOTOGRAPHY</h1>
            <Gallery photos={product}/>
          </div>
        </section>
        <section className='photos' id='life'>
          <div className='images'>
            <h1>LIFESTYLE PHOTOGRAPHY</h1>
            <Gallery photos={lifestyle}/>
          </div>
        </section>
        <section className='photos' id='video'>
          <div className='images'>
            <h1>VIDEO</h1>
            <div className='row'>
              <iframe src="https://player.vimeo.com/video/409192497" width="440" height="440"></iframe>
              <iframe src="https://player.vimeo.com/video/409192401" width="440" height="440"></iframe>
              <iframe src="https://player.vimeo.com/video/410391484" width="440" height="440"></iframe>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Photography