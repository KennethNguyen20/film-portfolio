import React from 'react';
import { Link } from 'react-router-dom';
import './ExperimentalPage.css'; 
import IWantMyVmagPhoto from '../assets/images/IWantMyVMAGPhoto.png';
import JourneyOutWestPhoto from '../assets/images/JourneyOutWestPhoto.png';
import NightlifePhoto from '../assets/images/NightlifePhoto.png';
import ASeasonatUVAPhoto from '../assets/images/SeasonPhoto.png';

function ExperimentalPage() {
  return (
    <div className="experimental-container">
      {/* Top row */}
      <div className="row">
        <Link to="/i-want-my-vmag" className="image-link">
          <img src={IWantMyVmagPhoto} alt="I Want My Vmag" className="image" />
        </Link>
        <Link to="/nightlife-archetypes" className="image-link">
          <img src={NightlifePhoto} alt="Nightlife Archetypes" className="image" />
        </Link>
      </div>
      {/* Bottom row */}
      <div className="row">
        <Link to="/a-journey-out-west" className="image-link">
          <img src={JourneyOutWestPhoto} alt="A Journey Out West" className="image" />
        </Link>
        <Link to="/a-season-at-uva" className="image-link">
          <img src={ASeasonatUVAPhoto} alt="A Season at UVA" className="image" />
        </Link>
      </div>
    </div>
  );
}

export default ExperimentalPage;
