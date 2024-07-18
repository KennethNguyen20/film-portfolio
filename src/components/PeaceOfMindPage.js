import React, { useState } from 'react';
import VideoLinkPageTemplate from './VideoLinkPageTemplate';

function PeaceOfMindPage(){
    const title = "PEACE OF MIND";
    const description = "A visual exploration of finding peace through the beauty of nature. Captured on 16mm film (Kodak Vision3 50D) using a Bolex H16."
    const videoSrc = "https://player.vimeo.com/video/985848681";

    return(
        <div>
            <VideoLinkPageTemplate title={title} description={description} videoSrc={videoSrc} />
        </div>
    )
}

export default PeaceOfMindPage;

