import React from 'react'
import NavbarPhotography from '../Common/NavbarPhotography'
import Gallery from 'react-photo-gallery';
import product from './Photos';
import lifestyle from './Lifestyle'
import travel from './Travel';

class Photography extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <main className='photography-main'>
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
        <section className='photos' id='life'>
          <div className='images'>
            <div className='text-decoration'>
              <h1>LIFESTYLE PHOTOGRAPHY</h1>
            </div>
            <div className='line'>
              <Gallery photos={lifestyle} key={lifestyle}/>
            </div>
          </div>
        </section>
        <section className='photos' id='product'>
          <div className='images'>
            <div className='text-decoration'>
              <h1>PRODUCT PHOTOGRAPHY</h1>
            </div>
            <div className='line'>
              <Gallery photos={product} key={product}/>
            </div>
          </div>
        </section>
        <section className='photos' id='travel'>
          <div className='images'>
            <div className='text-decoration'>
              <h1>TRAVEL</h1>
            </div>
            <div className='line'>
              <Gallery photos={travel} key={travel}/>
            </div>
          </div>
        </section>
        <section className='photos' id='video'>
          <div className='images'>
            <div className='text-decoration'>
              <h1>VIDEO</h1>
            </div>
            <div className='line'>
              <div className='row'>
                <iframe src="https://player.vimeo.com/video/409192497" width="440" height="440"></iframe>
                <iframe src="https://player.vimeo.com/video/409192401" width="440" height="440"></iframe>
                <iframe src="https://player.vimeo.com/video/410391484" width="440" height="440"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Photography