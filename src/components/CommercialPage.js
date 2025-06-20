import React from 'react';
import { Link } from 'react-router-dom';
import JetsweatPhoto from '../assets/images/JetsweatThumb2.jpg';
import MothPhoto from '../assets/images/MothThumb.jpg';
import IWantMyVmagPhoto from '../assets/images/IWantMyVMAGPhoto.png';
import FishWaterPhoto from '../assets/images/fishwaterborder.jpg';

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
    width: '700px', // Set a fixed width for larger images
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <div style={rowStyle}>
        <Link to="/fish-out-of-water" className="image-link">
          <div className="image-overlay-container">
            <img src={FishWaterPhoto} alt="Fish Out of Water" style={imageStyle} />
            <div className="image-title">Fish Out of Water</div>
          </div>
        </Link>
      </div>
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
      <div style={rowStyle}>
        <Link to="/i-want-my-vmag" className="image-link">
          <div className="image-overlay-container">
            <img src={IWantMyVmagPhoto} alt="I Want My Vmag" style={imageStyle} />
            <div className="image-title">I Want My Vmag</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CommercialPage;
