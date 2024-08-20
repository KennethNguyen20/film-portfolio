import React, { useState } from 'react';
import VideoLinkPageTemplate from './VideoLinkPageTemplate';


function Jetsweat() {
  const title = "A HEALTHIER TOMORROW";
  const description = "Part of the JETSWEAT 2024 marketing campaign, aligning with the company’s expansion from a fitness-centric platform to a comprehensive health-focused service.";
  const videoSrc = "https://www.youtube.com/embed/Uye0qF0k13s?vq=hd1080";

  const [modalImage, setModalImage] = useState(null);


  const closeModal = () => {
    setModalImage(null);
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

export default Jetsweat;
