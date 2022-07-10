
import { url } from "inspector";
import MyVideo from "../../../assets/Video/tutorial.mp4"
import Poster from "../../../assets/images/Thumbnaills/poster-tutorial.png"
import './Style/Video.scss'

const video = MyVideo;

export default function Video() {
    return (
        <section id="video-vidrelo">
            <div className="video-title">
                <h3>
                    Veja como é <span>simples</span> contratar a <span>Vidrelo!</span>
                </h3>
            </div>
            <div className='video-content'>
                <video className='video'
                    controls
                    src={MyVideo}
                    poster={Poster}
                />
            </div>
        </section>
    )

}

