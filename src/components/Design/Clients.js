import React from 'react';
import LazyLoad from 'react-lazy-load';
import { clients } from './designdata/Clientsdata';

const Clients = () => (
  <section className="clients">
    <div className="title-decoration">
      <h1>CLIENT PROJECTS</h1>
    </div>
    {clients.map(client => (
      <div className="client" key={client.index}>
        <div className={client.row}>
          <div className={client.single}>
            <img
              src={client.logo}
              alt={client.logo}
              className={client.logoclass}
            />
            <div className="grey fivepx"></div>
            <h4>{client.subtitle}</h4>
            {client.text &&
              client.text.map((para, i) => (
                <div key={i}>
                  <p>{para}</p>
                  <br />
                </div>
              ))}
            {client.list && (
              <ul>
                <li>{client.list[0]}</li>
                <li>{client.list[1]}</li>
                <li>{client.list[2]}</li>
                <li>{client.list[3]}</li>
                <li>{client.list[4]}</li>
                <br />
              </ul>
            )}
            {client.video && (
              <iframe
                title="Video"
                src={client.video}
                width="100%"
                height="400"
                allow="autoplay; fullscreen"
              ></iframe>
            )}
          </div>
          <div className="gallery">
            {client.photos &&
              client.photos.map((photo, i) => (
                <LazyLoad key={i} offsetVertical={1000} debounce={false}>
                  <img
                    className="gallery-images"
                    id={photo.id}
                    src={photo.src}
                    alt={photo.src}
                    key={photo.number}
                  />
                </LazyLoad>
              ))}
          </div>
        </div>
        {client.extra && (
          <div className="extra-column">
            <h1>Consumer Journey:</h1>
            <div className="extra">
              {client.extra.map((image, i) => (
                <img
                  className="extra-image"
                  src={image}
                  alt="Bombay consumer journey"
                  key={i}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
    <div id="self" className="clients-image"></div>
  </section>
);

export default Clients;
