
import VideoLinkPageTemplate from './VideoLinkPageTemplate';

function PeaceOfMindPage(){
    const title = "PEACE OF MIND";
    const description = "A visual exploration of finding peace through the beauty of nature. Captured on 16mm film (Kodak Vision3 50D) using a Bolex H16."
    const videoSrc = "https://player.vimeo.com/video/985848681";

    return(
        <div>
            <VideoLinkPageTemplate title={title} description={description} videoSrc={videoSrc} />
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
    )
}

export default PeaceOfMindPage;

