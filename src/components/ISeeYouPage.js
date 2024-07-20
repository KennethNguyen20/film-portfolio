import React from 'react';
import VideoLinkPageTemplate from './VideoLinkPageTemplate';

function ISeeYouPage() {
  const title = "I SEE YOU";
  const description = "Facing imminent blindness, Andy stubbornly insists on handling his condition alone. However, his sense of independence is challenged when his sister Anna comes to visit.";
  const videoSrc = "https://www.youtube.com/embed/SYOULxypMoA";

  const credits = [
    { role: "Director", name: "ANSH PATHAPADU" },
    { role: "Director of Photography", name: "KENNETH NGUYEN" },
    { role: "Producer", name: "ROWAN ROSENBLUM" },
    { role: "Music", name: "ALEX MATTERN" },
    { role: "Editors", names: ["KENNETH NGUYEN and ANSH PATHAPADU"] }
  ];
  const keycast = [
    { role: "Andy", name: "JOSEPH BARTH" },
    { role: "Anna", name: "HANNAH NICHOLSON" },
    { role: "Dr. Gerry", name: "KERA O'BYRON" },
    { role: "Optometrist", name: "SAM DIVELY" },
    { role: "Robert", name: "JIM MONE"}
  ];

  return (
    <div>
      <VideoLinkPageTemplate title={title} description={description} videoSrc={videoSrc} />
      <div style={{ marginTop: '20px', fontFamily: 'Futura', textAlign: 'center', color: 'white' }}>
        <h3>CREDITS</h3>
        {credits.map((credit, index) => (
          <div key={index}>
            {credit.role}: {Array.isArray(credit.names) ? credit.names.join(', ') : credit.name}
          </div>
        ))}
        <h3>KEY CAST</h3>
        {keycast.map((credit, index) => (
          <div key={index}>
            {credit.role}: {Array.isArray(credit.names) ? credit.names.join(', ') : credit.name}
          </div>
        ))}
      </div>
      {/* Media query for smaller devices */}
      <style>
        {`
          @media screen and (max-width: 767px) {
            iframe {
              width: 95%; /* Make the video fill the width of the container */
              height: 300px;
              
            }
            row {
              display: row; /* Change display to block for smaller devices */
            }
            
          }
        `}
      </style>
    </div>
  );
}

export default ISeeYouPage;
