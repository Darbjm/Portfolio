import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { clients } from "./designdata/Clientsdata";


const Clients = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
<section className='clients'>
  <h1>CLIENT PROJECTS</h1>
  {clients.map((client, i) => (
    <div className='row' key={i} >
    <div className='single'>
    <img src={client.logo} alt={client.logo}/>
    <h4>{client.subtitle}</h4>
    <p>{client.text}</p>
    </div>
    <div className='gallery'>
      <Gallery photos={client.photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={client.photos.map((x, i) => ({
                ...x,
                key: i,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  </div>))}
</section>
)
}

export default Clients