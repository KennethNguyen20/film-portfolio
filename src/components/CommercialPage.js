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
    padding: '10px',
  };

  const rowStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '800px', // Set a fixed width for larger images
    height: 'auto',
    maxWidth: '100%', // Make images responsive
  };

  const imageTitleStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px',
    borderRadius: '3px',
    fontSize: '20px',
  };

  return (
    <div style={containerStyle}>
      <div style={rowStyle}>
        <Link to="/jetsweat" className="image-link" style={{ position: 'relative' }}>
          <div className="image-overlay-container" style={{ position: 'relative' }}>
            <img src={JetsweatPhoto} alt="Jetsweat" style={imageStyle} />
            <div className="image-title" style={imageTitleStyle}>Jetsweat</div>
          </div>
        </Link>
      </div>
      <div style={rowStyle}>
        <Link to="/themoth" className="image-link" style={{ position: 'relative' }}>
          <div className="image-overlay-container" style={{ position: 'relative' }}>
            <img src={MothPhoto} alt="The Moth" style={imageStyle} />
            <div className="image-title" style={imageTitleStyle}>The Moth</div>
          </div>
        </Link>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media screen and (max-width: 767px) {
            .image-overlay-container img {
              width: 100%; /* Make images responsive */
              max-width: 400px; /* Limit maximum width */
            }

            .image-title {
              font-size: 16px; /* Adjust font size for smaller screens */
              padding: 3px;
            }

            .image-link {
              display: block; /* Ensure links are block-level for better clickability */
            }
          }
        `}
      </style>
    </div>
  );
}

export default CommercialPage;
