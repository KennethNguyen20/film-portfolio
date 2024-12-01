
import VideoLinkPageTemplate from './VideoLinkPageTemplate';

function VMagWater(){
    const title = "Fish Out of Water";
    const description = "Out of the water, into the spotlight. Promotional video for the VMagazine Fall 2024 print issue."
    const videoSrc = "https://player.vimeo.com/video/1034844858";

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
