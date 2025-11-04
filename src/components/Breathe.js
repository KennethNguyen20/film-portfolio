import React from 'react';
import VideoLinkPageTemplate from './VideoLinkPageTemplate';
import BreatheStillImage from '../assets/images/BreatheStill.jpg';

function Breathe() {
  const title = "BREATHE (2025)";
  const subtitle = "Short Film, 7mins";
  const description = "A young man grappling with the death of his brother, learns to confront his pain and comfort his innocent sister, finding unexpected solace in their shared vulnerability.";
  const imageSrc = BreatheStillImage;

  const credits = [
    { role: "Directors", name: "KENNETH NGUYEN and JADEN KILKENNY" },
    { role: "Producer", name: "ROWAN ROSENBLUM" },
    { role: "Music", name: "ARYAN MEDAM" },
    { role: "Editor", names: ["KENNETH NGUYEN"] }
  ];

  const keycast = [
    { role: "Kieran", name: "JADEN KILKENNY" },
    { role: "Ruby", name: "SUMMER SERAFIM" },
    { role: "Soraya", name: "PEIGHTON BROWN" },
    { role: "Father", name: "TERRELL HILL" },
    { role: "Mother", name: "LATOYA JACKSON" }
  ];

  const festivals = [
    { name: "Richmond Indie Film Festival 2025", note: "Official Selection" }
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
        <h3>FESTIVALS</h3>
        <div style={{ fontSize: '16px', lineHeight: '2' }}>
          {festivals.map((festival, index) => (
            <div key={index}>
              {festival.name}, <span style={{ fontStyle: 'italic' }}>{festival.note}</span>
            </div>
          ))}
        </div>
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
