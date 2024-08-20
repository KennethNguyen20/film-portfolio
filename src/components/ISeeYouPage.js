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
    <div className="i-see-you-page">
      <VideoLinkPageTemplate title={title} description={description} videoSrc={videoSrc} />
      
      <div className="credits-section">
        <h3>CREDITS</h3>
        <div className="credits-container">
          {credits.map((credit, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
              <div style={{ textAlign: 'left', flex: '1' }}>{credit.role}</div>
              <div style={{ textAlign: 'right', flex: '1' }}>{Array.isArray(credit.names) ? credit.names.join(', ') : credit.name}</div>
            </div>
          ))}
        </div>
        <h3>KEY CAST</h3>
        <div className="keycast-container">
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
          .i-see-you-page {
            color: white; /* Ensure text is white */
            font-family: 'Futura', sans-serif; /* Ensure consistent font */
            padding: 0; /* Default padding for larger screens */
          }
          
          .credits-container,
          .keycast-container {
            max-width: 800px; /* Ensure content doesn't stretch too wide on larger screens */
            margin: 0 auto; /* Center the container */
          }

          @media screen and (max-width: 767px) {
            .i-see-you-page {
              padding: 0 10px; /* Add padding to sides for smaller devices */
            }

            iframe {
              width: 100%; /* Make the video fill the width of the container */
              height: 500px; /* Adjust height to avoid squishing */
            }
            
            .credits-container,
            .keycast-container {
              font-size: 16px; /* Adjust font size for credits and key cast */
              padding: 0 10px; /* Add padding to sides */
            }
          }
        `}
      </style>
    </div>
  );
}

export default ISeeYouPage;
