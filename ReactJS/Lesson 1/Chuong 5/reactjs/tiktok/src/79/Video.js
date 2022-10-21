import video_1 from './Videos/video-1.mp4'
import video_2 from './Videos/video-2.mp4'
import video_3 from './Videos/video-3.mp4'


function Video(props){

    console.log(props.ref) //return undefined

    return (
        <video
            ref={props.ref}
            src={video_1}
            width={350}
            controls
            autoPlay
        ></video>
    )
}

export default Video