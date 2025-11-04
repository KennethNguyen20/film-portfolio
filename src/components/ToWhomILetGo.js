import React from 'react';
import VideoLinkPageTemplate from './VideoLinkPageTemplate';
import ToWhomILetGoStill from '../assets/images/ToWhomILetGoStill.jpg';

function Breathe() {
  const title = "TO WHOM I LET GO (2025)";
  const subtitle = "In Production, Short Film";
  const description = "In the quiet streets of Siena, a young man confronts the weight of his past and the silence he’s built around himself, forcing him to face a truth he’s long avoided.";
  const imageSrc = ToWhomILetGoStill;

  const credits = [
    { role: "Writer, Director, Editor", name: "KENNETH NGUYEN" },
    { role: "Music", name: "VINCENT NGUYEN" },
  ];

  const keycast = [
    { role: "Damien", name: "JAMMEL YEBOAH" },
    { role: "Suz", name: "CLAIRE LEE (voice)" },
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
