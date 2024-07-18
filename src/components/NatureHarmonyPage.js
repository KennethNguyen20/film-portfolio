
import VideoLinkPageTemplate from './VideoLinkPageTemplate';

function NatureHarmonyPage(){
    const title = "NATURE'S HARMONY | HAIKU";
    const description = "A video haiku captured on 16mm film (Kodak Vision3 250D) using a Bolex H16."
    const videoSrc = "https://player.vimeo.com/video/985846251";

    return(
        <div>
            <VideoLinkPageTemplate title={title} description={description} videoSrc={videoSrc} />
        </div>
    )
}

export default NatureHarmonyPage;
