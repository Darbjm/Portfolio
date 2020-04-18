import React, { useState } from 'react';
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
        <img src={client.logo} alt={client.logo} className='logo'/>
        <div class='grey fivepx'></div>
        <h4>{client.subtitle}</h4>
        <p>{client.text}</p>
        {client.video && <iframe title='Video' src={client.video} width='100%' height='400' frameborder='0' allowfullscreen></iframe>}
      </div>
    <div className='gallery'>
      <Gallery photos={client.photos} />
    </div>
    </div>
  </div>))}
</section>
)
}

export default Clients