import React from 'react';

function VideoLinkPageTemplate({ title, subtitle, description, videoSrc, imageSrc }) {
  return (
    <div style={{ fontFamily: 'Futura', position: 'relative', color: 'black' }}>
      <div style={{ textAlign: 'center' }}>
        {/* Conditionally render either video or image */}
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '900px',
              border: 'none',
              objectFit: 'cover',
            }}
          />
        ) : (
          <iframe
            width="900"
            height="506"
            src={videoSrc}
            title={title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div style={{ maxWidth: '800px', margin: '20px auto', lineHeight: '2', textAlign: 'left' }}>
        <h2>{title}</h2>
        {subtitle && (
          <h4 style={{ color: 'gray', fontWeight: 'normal', marginTop: '-10px', marginBottom: '1px' }}>
            {subtitle}
          </h4>
        )}
        <p>{description}</p>
      </div>

      <div className="row">
        {/* Images or other content can go here if needed */}
      </div>
    </div>
  );
}

export default VideoLinkPageTemplate;
