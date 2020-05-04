import React from 'react'
import NavbarArt from '../Common/NavbarArt'
import Highfield from './ArtPhotos/James Darby_oil art-01.png'
import Mountain from './ArtPhotos/James Darby_oil art-02.png'
import Lub from './ArtPhotos/James Darby_oil art-03.png'
import Cypress from './ArtPhotos/James Darby_oil art-04.png'
import LazyLoad from 'react-lazy-load';

class Art extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <main>
        <NavbarArt />
        <div className='art-main'>
        <section className='art-header'>
          <div className='name'>
            <div className='color-box'>
              <strong>JAMES DARBY</strong>
              <h4>FINE ART</h4>
            </div>
          </div>
        </section>
        <section className='art'>
          <div className='images'>
            <div className='description'>  
              <h1>OILS ON CANVAS</h1>
              <div className="grey"></div>
              <p>While at Central St Martins my art evolved alongside my design pactise, I took classes in life drawing and exhibited various works. Influenced by Pierre Bonnard, Will Martyr, David Hockney and Susan Ryder. Rich in texture and colour, my love of design means I look closely at the spaces we inhabit to produce dreamlike impressionism, taking satisfaction in texture and form.</p>
            </div>
            <div className='show'>
              <div className='info'>
              <LazyLoad offsetVertical={700} debounce={false}>
                <img src={Highfield} alt='oil painting' />
              </LazyLoad>
                <div className='info-card'>
                  <h2 className='rale'>Highfield</h2>
                  <div className="grey"></div>
                  <p>100cm x 70cm - oil on canvas</p>
                </div>
              </div>
              <div className='info'>
              <LazyLoad offsetVertical={700} debounce={false}>
                <img src={Mountain} alt='oil painting' />
              </LazyLoad>
                <div className='info-card'>
                  <h2 className='rale'>Mountain Road</h2>
                  <div className="grey"></div>
                  <p>70cm x 50cm - oil on canvas</p>
                </div>
              </div>
              <div className='info'>
              <LazyLoad offsetVertical={700} debounce={false}>
                <img src={Lub} alt='oil painting' />
              </LazyLoad>
                <div className='info-card'>
                  <h2 className='rale'>Lubenham Farm</h2>
                  <div className="grey"></div>
                  <p>70cm x 50cm - oil on canvas</p>
                </div>
              </div>
              <div className='info'>
              <LazyLoad offsetVertical={700} debounce={false}>
                <img src={Cypress} alt='oil painting' />
              </LazyLoad>
                <div className='info-card'>
                  <h2 className='rale'>Cypresses</h2>
                  <div className="grey"></div>
                  <p>70cm x 30cm - oil on canvas</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
    )
  }
}

export default Art