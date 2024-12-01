
import VideoLinkPageTemplate from './VideoLinkPageTemplate';

function VMagWater(){
    const title = "Hotel Fiction Concert Recap";
    const description = "Experience the electrifying energy of Hotel Fiction’s Charlottesville performance in this 30-second concert recap, highlighting the band’s dynamic presence and captivating sound."
    const videoSrc = "https://player.vimeo.com/video/1034843946";

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

export default VMagWater;
