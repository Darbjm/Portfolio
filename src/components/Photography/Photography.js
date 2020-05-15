import React from 'react'
import NavbarPhotography from '../Common/NavbarPhotography'
import product from './Photos';
import lifestyle from './Lifestyle'
import travel from './Travel';
import LazyLoad from 'react-lazy-load';

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
              {lifestyle && lifestyle.map((photo, i) => (<LazyLoad key={i} offsetVertical={1000} debounce={false}><img className='gallery-images' id={photo.id} src={photo.src} alt={photo.src} key={photo.number} /></LazyLoad>))}
            </div>
          </div>
        </section>
        <section className='photos' id='product'>
          <div className='images'>
            <div className='text-decoration'>
              <h1>PRODUCT PHOTOGRAPHY</h1>
            </div>
            <div className='line'>
              {product && product.map((photo, i) => (<LazyLoad key={i} offsetVertical={1000} debounce={false}><img className='gallery-images' id={photo.id} src={photo.src} alt={photo.src} key={photo.number} /></LazyLoad>))}
            </div>
          </div>
        </section>
        <section className='photos' id='travel'>
          <div className='images'>
            <div className='text-decoration'>
              <h1>TRAVEL</h1>
            </div>
            <div className='line'>
              {travel && travel.map((photo, i) => (<LazyLoad key={i} offsetVertical={1000} debounce={false}><img className='gallery-images' id={photo.id} src={photo.src} alt={photo.src} key={photo.number} /></LazyLoad>))}
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
                <LazyLoad offsetVertical={1000} debounce={false}>
                  <iframe src='https://player.vimeo.com/video/409192497' width='440' height='440' title='vimeo1'></iframe>
                </LazyLoad>
                <LazyLoad offsetVertical={1000} debounce={false}>
                  <iframe src='https://player.vimeo.com/video/409192401' width='440' height='440' title='vimeo2'></iframe>
                </LazyLoad>
                <LazyLoad offsetVertical={1000} debounce={false}>
                  <iframe src='https://player.vimeo.com/video/410391484' width='440' height='440' title='vimeo3'></iframe>
                </LazyLoad>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Photography