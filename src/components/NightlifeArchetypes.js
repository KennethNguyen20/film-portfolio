import React, { useState } from 'react';
import VideoLinkPageTemplate from './VideoLinkPageTemplate';

import Image1 from '../assets/images/NightlifeArchetypesStills/Still1.png';
import Image2 from '../assets/images/NightlifeArchetypesStills/Still2.png';
import Image3 from '../assets/images/NightlifeArchetypesStills/Still3.png';
import Image4 from '../assets/images/NightlifeArchetypesStills/Still4.png';
import Image5 from '../assets/images/NightlifeArchetypesStills/Still5.png';
import Image6 from '../assets/images/NightlifeArchetypesStills/Still6.png';

function NightlifeArchetypesPage() {
  const title = "NIGHTLIFE ARCHETYPES";
  const description = "Showcasing the vibrant world of nightlife fashion and the diverse archetypes created from it. A dynamic exploration of style and identity.";
  const videoSrc = "https://www.youtube.com/embed/irWNFbIYBZ4?vq=hd1080";


  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const imageStyle = {
    width: '33.3%', 
    height: 'auto', 
    marginRight: '0px', 
    cursor: 'pointer', 
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  };

  return (
    <div>
      <VideoLinkPageTemplate title={title} description={description} videoSrc={videoSrc} />
      <div className="row">
        <img src={Image1} alt="Crowd" style={imageStyle} onClick={() => handleImageClick(Image1)} />
        <img src={Image2} alt="Title Card" style={imageStyle} onClick={() => handleImageClick(Image2)} />
        <img src={Image3} alt="Joker" style={imageStyle} onClick={() => handleImageClick(Image3)} />
      </div>
      <div className='row'>
        <img src={Image4} alt="Cig" style={imageStyle} onClick={() => handleImageClick(Image4)} />
        <img src={Image5} alt="Tie" style={imageStyle} onClick={() => handleImageClick(Image5)} />
        <img src={Image6} alt="Car" style={imageStyle} onClick={() => handleImageClick(Image6)} />
      </div>
      {modalImage && (
        <div style={modalStyle} onClick={closeModal}>
          <img src={modalImage} alt="Modal" style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </div>
      )}

      {/* Media query for smaller devices */}
      <style>
        {`
          .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          @media screen and (max-width: 767px) {
            iframe {
              width: 95%; /* Make the video fill the width of the container */
              height: 300px;
            }
            .row {
              flex-direction: column;
              align-items: center;
            }
            .row img {
              width: 100%;
              
            }
          }
        `}
      </style>
    </div>
  );
}

export default NightlifeArchetypesPage;
