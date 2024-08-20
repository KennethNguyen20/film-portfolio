import React from 'react';
import { Link } from 'react-router-dom';
import JetsweatPhoto from '../assets/images/JetsweatThumb2.jpg';
import MothPhoto from '../assets/images/MothThumb.jpg';

function CommercialPage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  };

  const rowStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '800px', // Set a fixed width for larger images
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <div style={rowStyle}>
        <Link to="/jetsweat" className="image-link">
          <div className="image-overlay-container">
            <img src={JetsweatPhoto} alt="Jetsweat" style={imageStyle} />
            <div className="image-title">Jetsweat</div>
          </div>
        </Link>
      </div>
      <div style={rowStyle}>
        <Link to="/themoth" className="image-link">
          <div className="image-overlay-container">
            <img src={MothPhoto} alt="The Moth" style={imageStyle} />
            <div className="image-title">The Moth</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CommercialPage;
