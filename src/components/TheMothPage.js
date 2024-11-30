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

  return (
    <div className="the-moth-page">
      <VideoLinkPageTemplate title={title} description={description} videoSrc={videoSrc} />

      <div style={{ marginTop: '20px', fontFamily: 'Futura', textAlign: 'center', color: 'black' }}>
        <h3>CREDITS</h3>
        <div className="credits-container">
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
          .the-moth-page {
            padding: 0; /* Default padding for larger screens */
          }
          
          .credits-container {
            max-width: 800px; /* Ensures content doesn't stretch too wide on larger screens */
            margin: 0 auto; /* Center the container */
          }

          @media screen and (max-width: 767px) {
            .the-moth-page {
              padding: 0 10px; /* Add padding to sides for smaller devices */
            }

            iframe {
              width: 100%; /* Make the video fill the width of the container */
              height: 400px; /* Make the video taller to avoid squishing */
            }
            
            .row {
              flex-direction: column;
              align-items: center;
              margin: 0;
              padding: 0 10px; /* Add padding to sides */
            }
            
            .image-link {
              margin-bottom: 0;
            }
            
            .image-title {
              font-size: 14px; /* Adjust font size for smaller screens */
              padding: 5px; /* Adjust padding for smaller screens */
            }
            
            .image-overlay-container::before {
              background-color: rgba(0, 0, 0, 0.7); /* Adjust overlay opacity for better readability */
            }
            
            .credits-container {
              font-size: 16px; /* Adjust font size for credits */
              padding: 0 10px; /* Add padding to sides for smaller devices */
            }
          }
        `}
      </style>
    </div>
  );
}

export default TheMothPage;
