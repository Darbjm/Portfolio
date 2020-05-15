import React from 'react'
import web from './designdata/allphotos/James Darby_Website Design_02.png'
import alter from './designdata/allphotos/James Darby_Website Design_03.png'
import altertwo from './designdata/allphotos/James Darby_Website Design_04.png'
import greg from './designdata/allphotos/James Darby_Website Design_05.png'
import LazyLoad from 'react-lazy-load';

const Website = () => {
  return(
    <section className='website'>
      <div className='title-decoration'>
        <h1>WEBSITES</h1>
      </div>
        <div className='center'>
          <h4>Using wordpress I worked with another freelancer to build and maintain these websites</h4>
          <div className='grey'></div>
          <p>Whilst working on these sites I aquired:<br/> 1. SEO strategies<br/> 2. A strong understanding of website structure and layout<br/> 3. An insight into servers and urls</p>
        </div>
        <div className='web-row'>
          <LazyLoad offsetVertical={1000} debounce={false}>
            <img className='website-image' src={greg} alt='Gregorys tree website' />
          </LazyLoad>
          <LazyLoad offsetVertical={1000} debounce={false}>
            <img className='website-image' src={web} alt='Gregorys tree website' />
          </LazyLoad>
          <LazyLoad offsetVertical={1000} debounce={false}>
            <img className='website-image' src={alter} alt='ALTER AGENCY website' />
          </LazyLoad>
          <LazyLoad offsetVertical={1000} debounce={false}>
            <img className='website-image' src={altertwo} alt='ALTER AGENCY website' />
          </LazyLoad>
        </div>
    </section>
  )
}

export default Website