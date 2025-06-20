import React from 'react';
import { Link } from 'react-router-dom';
import ISeeYouStillImage from '../assets/images/ISeeYouStill.jpg';
import BreatheStillImage from '../assets/images/BreatheStill.jpg';
import PleaseHoldStillImage from '../assets/images/PleaseHoldStill.jpg';
import ToWhomILetGoStillImage from '../assets/images/ToWhomILetGoStill.jpg';

function NarrativePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'Futura, sans-serif' }}>
      {/* To Whom I Let Go Page Link */}
      <Link to="/to-whom-i-let-go" className="image-link" style={{ display: 'block', margin: '0 auto', position: 'relative' }}>
        <img src={ToWhomILetGoStillImage} alt="To Whom I Let Go Still" className="narrative-image" />
        <div className="image-title">To Whom I Let Go</div>
      </Link>
      
      {/* Please Hold Page Link */}
      <Link to="/please-hold" className="image-link" style={{ display: 'block', margin: '30px auto 0', position: 'relative' }}>
        <img src={PleaseHoldStillImage} alt="Please Hold Still" className="narrative-image" />
        <div className="image-title">Please Hold</div>
      </Link>
      
      {/* Breathe Page Link */}
      <Link to="/breathe" className="image-link" style={{ display: 'block', margin: '30px auto 0', position: 'relative' }}>
        <img src={BreatheStillImage} alt="Breathe Still" className="narrative-image" />
        <div className="image-title">Breathe</div>
      </Link>

      {/* I See You Page Link */}
      <Link to="/i-see-you" className="image-link" style={{ display: 'block', margin: '30px auto 0', position: 'relative' }}>
        <img src={ISeeYouStillImage} alt="I See You Still" className="narrative-image" />
        <div className="image-title">I See You</div>
      </Link>

      <style>
        {`
          .image-link {
            transition: transform 0.3s ease-in-out; 
            position: relative;
            display: inline-block;
          }

          .image-link:hover {
            transform: scale(1.03); 
            z-index: 1;
          }

          .narrative-image {
            max-width: 50%;
            width: auto;
            height: auto;
            display: block;
            margin: 0 auto;
          }

          .image-title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            text-align: center;
            font-family: 'Futura', sans-serif;
            font-size: 16px;
            text-transform: uppercase;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }

          .image-link:hover .image-title {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}

export default NarrativePage;
