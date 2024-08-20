import React from 'react';
import VideoLinkPageTemplate from './VideoLinkPageTemplate';

function ISeeYouPage() {
  const title = "I SEE YOU";
  const description = "Facing imminent blindness, Andy stubbornly insists on handling his condition alone. However, his sense of independence is challenged when his sister Anna comes to visit.";
  const videoSrc = "https://www.youtube.com/embed/SYOULxypMoA";

  const credits = [
    { role: "Director", name: "ANSH PATHAPADU" },
    { role: "Director of Photography", name: "KENNETH KIEN NGUYEN" },
    { role: "Producer", name: "ROWAN ROSENBLUM" },
    { role: "Music", name: "ALEX MATTERN" },
    { role: "Editors", names: ["KENNETH KIEN NGUYEN and ANSH PATH"] }
  ];

  const keycast = [
    { role: "Andy", name: "JOSEPH BARTH" },
    { role: "Anna", name: "HANNAH NICHOLSON" },
    { role: "Dr. Gerry", name: "KERA O'BYRON" },
    { role: "Optometrist", name: "SAM DIVELY" },
    { role: "Robert", name: "JIM MONE" }
  ];

  return (
    <div>
      <VideoLinkPageTemplate title={title} description={description} videoSrc={videoSrc} />
      
      <div style={{ marginTop: '20px', fontFamily: 'Futura', textAlign: 'center', color: 'white' }}>
        <h3>CREDITS</h3>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px' }}>
          {credits.map((credit, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
              <div style={{ textAlign: 'left', flex: '1' }}>{credit.role}</div>
              <div style={{ textAlign: 'right', flex: '1' }}>{Array.isArray(credit.names) ? credit.names.join(', ') : credit.name}</div>
            </div>
          ))}
        </div>
        <h3>KEY CAST</h3>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px' }}>
          {keycast.map((cast, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
              <div style={{ textAlign: 'left', flex: '1' }}>{cast.role}</div>
              <div style={{ textAlign: 'right', flex: '1' }}>{cast.name}</div>
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
            .row {
              display: block; /* Stack items vertically on smaller devices */
            }
            .row img {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ISeeYouPage;
