import React from 'react';
import { Link } from 'react-router-dom';
import ISeeYouStillImage from '../assets/images/ISeeYouStill.jpg'; // Import your image

function NarrativePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'Futura, sans-serif' }}>
      
      <Link to="/i-see-you" className="image-link" style={{ display: 'block', margin: '0 auto' }}>
        <img src={ISeeYouStillImage} alt="ISeeYouStill" className="narrative-image" />
      </Link>
      <style>
        {`
          .image-link {
            transition: transform 0.3s ease-in-out; 
          }

          .image-link:hover {
            transform: scale(1.03); 
            z-index: 1;
          }

          .narrative-image {
            max-width: 80%;
            width: auto;
            height: auto;
            display: block;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
}

export default NarrativePage;
