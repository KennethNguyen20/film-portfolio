import React from 'react';

function VideoLinkPageTemplate({ title, description, videoSrc }) {
  return (
    <div style={{ fontFamily: 'Futura', position: 'relative', color: 'black' }}>
      <div style={{ textAlign: 'center' }}>
        <iframe
          width="900"
          height="506"
          src={videoSrc}
          title={title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div style={{ maxWidth: '800px', margin: '20px auto', lineHeight: '2', textAlign: 'left' }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {/* <div style={{ position: 'absolute', top: '0px', left: '50px', border: '1px solid black', borderRadius: '5px', padding: '6px 12px', backgroundColor: '#fffff' }}>
        <Link to="/experimental" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Futura, sans-serif', fontSize: '14px' }}>Back to Experimental Page</Link>
      </div> */}
      <div className="row">
        {/* Images will go here */}
      </div>
    </div>
  );
}

export default VideoLinkPageTemplate;
