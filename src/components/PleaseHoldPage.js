import React from 'react';
import VideoLinkPageTemplate from './VideoLinkPageTemplate';
import PleaseHoldImage from '../assets/images/PleaseHoldStill.jpg';

function Breathe() {
  const title = "PLEASE HOLD (2025)";
  const subtitle = "Short Film, 6mins";
  const description = "After waking up in a desolate field, a man follows a strange series of rotary phones that lead him through corporate hotlines and empty pleasantries, forcing him to confront his work-driven identity.";
  const imageSrc = PleaseHoldImage;

  const credits = [
    { role: "Directors and Editors", name: "KENNETH NGUYEN, REESE ROBERS" },
    { role: "Writers", name: "KENNETH NGUYEN, REESE ROBERS, ARYAN MEDAM" },
    { role: "Music and Sound", name: "ARYAN MEDAM" },
    
  ];

  const keycast = [
    { role: "Mike", name: "AARON HOFFMAN" },
    { role: "Sandra", name: "MARISSA MIDDLETON" }

  ];

  return (
    <div>
      <VideoLinkPageTemplate
        title={title}
        subtitle={subtitle}
        description={description}
        imageSrc={imageSrc} // Pass the image source instead of the video.
      />
      
      <div style={{ margin: '20px auto', fontFamily: 'Futura', maxWidth: '800px', color: 'black', textAlign: 'left' }}>
        <h3>CREDITS</h3>
        <div style={{ fontSize: '16px' }}>
          {credits.map((credit, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
              <div>{credit.role}</div>
              <div>{Array.isArray(credit.names) ? credit.names.join(', ') : credit.name}</div>
            </div>
          ))}
        </div>
        <h3>KEY CAST</h3>
        <div style={{ fontSize: '16px' }}>
          {keycast.map((cast, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
              <div>{cast.role}</div>
              <div>{cast.name}</div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @media screen and (max-width: 767px) {
            img {
              width: 95%; /* Make the image fill the width of the container */
              height: auto; /* Maintain aspect ratio */
            }
            div {
              margin-left: 20px;
              margin-right: 20px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Breathe;
