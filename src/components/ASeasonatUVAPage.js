import React, { useState } from 'react';
import VideoLinkPageTemplate from './VideoLinkPageTemplate';

import Image1 from '../assets/images/ASeasonAtUVAStills/Still1.png';
import Image2 from '../assets/images/ASeasonAtUVAStills/Still2.png';
import Image3 from '../assets/images/ASeasonAtUVAStills/Still3.png';
import Image4 from '../assets/images/ASeasonAtUVAStills/Still4.png';
import Image5 from '../assets/images/ASeasonAtUVAStills/Still5.png';
import Image6 from '../assets/images/ASeasonAtUVAStills/Still6.png';

function ASeasonatUVA() {
  const title = "A SEASON AT UVA";
  const description = "Capturing a transformative semester at the University of Virginia. Taking inspiration from Wes Anderson.";
  const videoSrc = "https://www.youtube.com/embed/Hqu7oWIkzW4?vq=hd1080";

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
        <img src={Image1} alt="Old Dorms" style={imageStyle} onClick={() => handleImageClick(Image1)} />
        <img src={Image2} alt="Besties" style={imageStyle} onClick={() => handleImageClick(Image2)} />
        <img src={Image3} alt="Rotunda Day" style={imageStyle} onClick={() => handleImageClick(Image3)} />
      </div>
      <div className='row'>
        <img src={Image4} alt="Rotunda Night" style={imageStyle} onClick={() => handleImageClick(Image4)} />
        <img src={Image5} alt="Street Light" style={imageStyle} onClick={() => handleImageClick(Image5)} />
        <img src={Image6} alt="Home" style={imageStyle} onClick={() => handleImageClick(Image6)} />
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

export default ASeasonatUVA;
