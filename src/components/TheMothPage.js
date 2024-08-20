import React, { useState } from 'react';
import VideoLinkPageTemplate from './VideoLinkPageTemplate';

function TheMothPage() {
  const title = "WELCOME TO THE MOTH";
  const description = "2024 Commercial for The Moth: Mainstage. Shot at Paramount Theater in Charlottesville, VA.";
  const videoSrc = "https://www.youtube.com/embed/jf6e6NHTnDA?vq=hd1080";

  const credits = [
    { role: "Videographer", name: "KENNETH KIEN NGUYEN" },
    { role: "Producer", name: "CHARLOTTE MUTH" },
    { role: "Executive Producers", name: "SARAH HABERMAN, SARAH AUSTIN JENNESS" },
    { role: "Audio Engineer", name: "LEWIS REINING" },
    { role: "Musician", name: "KELLY CHAMBERS" }
  ];

  const keycast = [
    { name: "ANTWON BRINSON" },
    { name: "KELLI DUNHAM" },
    { name: "ESMOND FOUNTAIN" },
    { name: "INDIA SIMS" },
    { name: "GEORGE SUMNER" }
  ];

  const [modalImage, setModalImage] = useState(null);

  const closeModal = () => {
    setModalImage(null);
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  };

  return (
    <div>
      <VideoLinkPageTemplate title={title} description={description} videoSrc={videoSrc} />

      <div style={{ marginTop: '20px', fontFamily: 'Futura', textAlign: 'center', color: 'white' }}>
        <h3>CREDITS</h3>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px' }}>
          {credits.map((credit, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
              <div style={{ textAlign: 'left', flex: '1' }}>{credit.role}</div>
              <div style={{ textAlign: 'right', flex: '1' }}>{credit.name}</div>
            </div>
          ))}
        </div>
        <h3>STORIES BY</h3>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px' }}>
          {keycast.map((cast, index) => (
            <div key={index} style={{ margin: '5px 0' }}>{cast.name}</div>
          ))}
        </div>
      </div>

      {/* Media query for smaller devices */}
      <style>
        {`
          .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          @media screen and (max-width: 767px) {
            iframe {
              width: 95%; /* Make the video fill the width of the container */
              height: 300px;
            }
            .row {
              flex-direction: column;
              align-items: center;
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

export default TheMothPage;
