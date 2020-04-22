import React from 'react';
import Gallery from 'react-photo-gallery';
import { clients } from './designdata/Clientsdata';

const Clients = () => {

  return (
<section className='clients'>
  <h1>CLIENT PROJECTS</h1>
  {clients.map((client, i) => (
    <div className='client'>
    <div className={client.row} key={i} >
      <div className={client.single}>
        <img src={client.logo} alt={client.logo} className={client.logoclass}/>
        <div class='grey fivepx'></div>
        <h4>{client.subtitle}</h4>
        <p>{client.text}</p>
        {client.list && <ul>
        <li>{client.list[0]}</li>
        <li>{client.list[1]}</li>
        <li>{client.list[2]}</li>
        <li>{client.list[3]}</li>
        <li>{client.list[4]}</li>
          </ul>}
        {client.video && <iframe title='Video' src={client.video} width='100%' height='400' frameborder='0' allowfullscreen></iframe>}
      </div>
    <div className='gallery'>
      <Gallery photos={client.photos} />
    </div>
    </div>
    {client.extra && <div className='extra-column'><h1>Consumer Journey:</h1><div className='extra'>{client.extra.map((image, i) => (<img className='extra-image' src={image} alt={image} />))}</div></div>}
  </div>))}
  <div id='self' className='clients-image'></div>
</section>
)
}

export default Clients