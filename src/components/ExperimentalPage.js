import React from 'react';
import { Link } from 'react-router-dom';
import './ExperimentalPage.css'; 
import IWantMyVmagPhoto from '../assets/images/IWantMyVMAGPhoto.png';
import JourneyOutWestPhoto from '../assets/images/JourneyOutWestPhoto.png';
import NightlifePhoto from '../assets/images/NightlifePhoto.png';
import ASeasonatUVAPhoto from '../assets/images/SeasonPhoto.png';
import PeaceOfMindPhoto from '../assets/images/PeaceOfMindThumb4.jpg';
import NatureHarmonyPhoto from '../assets/images/NatureHaikuThumb4.jpg';

function ExperimentalPage() {
  return (
    <div className="experimental-container">
      {/* Top row */}
      <div className="row">
        <Link to="/peace-of-mind" className="image-link">
          <div className="image-overlay-container">
            <img src={PeaceOfMindPhoto} alt="Peace of Mind" className="image" />
            <div className="image-title">Peace of Mind</div>
          </div>
        </Link>
        <Link to="/nature-harmony" className="image-link">
          <div className="image-overlay-container">
            <img src={NatureHarmonyPhoto} alt="Nature's Harmony" className="image" />
            <div className="image-title">Nature's Harmony</div>
          </div>
        </Link>
      </div>
      {/* Middle row */}
      <div className="row">
        <Link to="/i-want-my-vmag" className="image-link">
          <div className="image-overlay-container">
            <img src={IWantMyVmagPhoto} alt="I Want My Vmag" className="image" />
            <div className="image-title">I Want My Vmag</div>
          </div>
        </Link>
        <Link to="/nightlife-archetypes" className="image-link">
          <div className="image-overlay-container">
            <img src={NightlifePhoto} alt="Nightlife Archetypes" className="image" />
            <div className="image-title">Nightlife Archetypes</div>
          </div>
        </Link>
      </div>
      {/* Bottom row */}
      <div className="row">
        <Link to="/a-journey-out-west" className="image-link">
          <div className="image-overlay-container">
            <img src={JourneyOutWestPhoto} alt="A Journey Out West" className="image" />
            <div className="image-title">A Journey Out West</div>
          </div>
        </Link>
        <Link to="/a-season-at-uva" className="image-link">
          <div className="image-overlay-container">
            <img src={ASeasonatUVAPhoto} alt="A Season at UVA" className="image" />
            <div className="image-title">A Season at UVA</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ExperimentalPage;
