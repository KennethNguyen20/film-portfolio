import React, { useState } from 'react';
import VideoLinkPageTemplate from './VideoLinkPageTemplate';

import Image1 from '../assets/images/AJourneyOutWestStills/Still1.png';
import Image2 from '../assets/images/AJourneyOutWestStills/Still2.png';
import Image3 from '../assets/images/AJourneyOutWestStills/Still3.png';
import Image4 from '../assets/images/AJourneyOutWestStills/Still4.png';
import Image5 from '../assets/images/AJourneyOutWestStills/Still5.png';
import Image6 from '../assets/images/AJourneyOutWestStills/Still6.png';
import Image7 from '../assets/images/AJourneyOutWestStills/Still7.png';
import Image8 from '../assets/images/AJourneyOutWestStills/Still8.png';
import Image9 from '../assets/images/AJourneyOutWestStills/Still9.png';
import Image10 from '../assets/images/AJourneyOutWestStills/Still10.png';
import Image11 from '../assets/images/AJourneyOutWestStills/Still11.png';
import Image12 from '../assets/images/AJourneyOutWestStills/Still12.png';

function AJourneyOutWestPage() {
  const title = "A Journey Out West";
  const description = "Adventures through Las Vegas, Hoover Dam, Grand Canyon, and Wonderspaces in Arizona. Immersing viewers in the alluring landscapes of the American Southwest.";
  const videoSrc = "https://www.youtube.com/embed/u_tBqiVd-Qs";

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
        <img src={Image1} alt="Image 1" style={imageStyle} onClick={() => handleImageClick(Image1)} />
        <img src={Image2} alt="Image 2" style={imageStyle} onClick={() => handleImageClick(Image2)} />
        <img src={Image3} alt="Image 3" style={imageStyle} onClick={() => handleImageClick(Image3)} />
      </div>
      <div className='row'>
        <img src={Image4} alt="Image 4" style={imageStyle} onClick={() => handleImageClick(Image4)} />
        <img src={Image5} alt="Image 5" style={imageStyle} onClick={() => handleImageClick(Image5)} />
        <img src={Image6} alt="Image 6" style={imageStyle} onClick={() => handleImageClick(Image6)} />
      </div>
      <div className='row'>
        <img src={Image7} alt="Image 7" style={imageStyle} onClick={() => handleImageClick(Image7)} />
        <img src={Image8} alt="Image 8" style={imageStyle} onClick={() => handleImageClick(Image8)} />
        <img src={Image9} alt="Image 9" style={imageStyle} onClick={() => handleImageClick(Image9)} />
      </div>
      <div className='row'>
        <img src={Image10} alt="Image 7" style={imageStyle} onClick={() => handleImageClick(Image10)} />
        <img src={Image11} alt="Image 8" style={imageStyle} onClick={() => handleImageClick(Image11)} />
        <img src={Image12} alt="Image 9" style={imageStyle} onClick={() => handleImageClick(Image12)} />
      </div>
      
      {modalImage && (
        <div style={modalStyle} onClick={closeModal}>
          <img src={modalImage} alt="Modal Image" style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </div>
      )}

      {/* Media query for smaller devices */}
      <style>
        {`
          @media screen and (max-width: 767px) {
            iframe {
              width: 100%; /* Make the video fill the width of the container */
              height: 300px;
              
            }
            row {
              display: row; /* Change display to block for smaller devices */
            }
            
          }
        `}
      </style>
    </div>
  );
}

export default AJourneyOutWestPage;
