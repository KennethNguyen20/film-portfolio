import React from 'react';
import ISeeYouStillImage from '../assets/images/ISeeYouStill.jpg'; // Import your image

function NarrativePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'Futura, sans-serif' }}>
      <div style={{ fontSize: '30px', marginBottom: '10px' }}>
        COMING SPRING 2024.
      </div>
      <img src={ISeeYouStillImage} alt="ISeeYouStill" style={{ maxWidth: '80%', maxHeight: 'auto', width: 'auto', height: 'auto', display: 'block', margin: '0 auto' }} />
    </div>
  );
}

export default NarrativePage;
