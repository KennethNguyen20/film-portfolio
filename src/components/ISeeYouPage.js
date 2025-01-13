import React from 'react';
import VideoLinkPageTemplate from './VideoLinkPageTemplate';

function ISeeYouPage() {
  const title = "I SEE YOU (2023)";
  const subtitle = "Short Film, 15mins";
  const description = "Facing imminent blindness, Andy stubbornly insists on handling his condition alone. However, his sense of independence is challenged when his sister Anna comes to visit.";
  const videoSrc = "https://www.youtube.com/embed/SYOULxypMoA";

  const credits = [
    { role: "Director", name: "ANSH PATHAPADU" },
    { role: "Director of Photography", name: "KENNETH NGUYEN" },
    { role: "Producer", name: "ROWAN ROSENBLUM" },
    { role: "Music", name: "ALEX MATTERN" },
    { role: "Editors", names: ["KENNETH NGUYEN and ANSH PATH"] }
  ];

  const keycast = [
    { role: "Andy", name: "JOSEPH BARTH" },
    { role: "Anna", name: "HANNAH NICHOLSON" },
    { role: "Dr. Gerry", name: "KERA O'BYRON" },
    { role: "Optometrist", name: "SAM DIVELY" },
    { role: "Robert", name: "JIM MONE" }
  ];

  const festivals = [
    { name: "Tokyo International Short Film Festival 2024", note: "Official Selection" },
    { name: "Cinéma Royale International Film Festival 2024", note: "Official Selection" }
  ];

  return (
    <div>
      <VideoLinkPageTemplate title={title} subtitle={subtitle} description={description} videoSrc={videoSrc} />
      
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
        <h3>FESTIVALS</h3>
        <div style={{ fontSize: '16px', lineHeight: '2' }}>
          {festivals.map((festival, index) => (
            <div key={index}>
              {festival.name}, <span style={{ fontStyle: 'italic' }}>{festival.note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Media query for smaller devices */}
      <style>
        {`
          @media screen and (max-width: 767px) {
            iframe {
              width: 95%; /* Make the video fill the width of the container */
              height: 300px;
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

export default ISeeYouPage;
