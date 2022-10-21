import { forwardRef, useImperativeHandle, useRef } from 'react'
import video_1 from './Videos/video-1.mp4'
import video_2 from './Videos/video-2.mp4'
import video_3 from './Videos/video-3.mp4'

// forwardRef => để chuyển ref từ trong ra ngoài => HOC
/** usage forwardRef()
 * 1. Tạo ra ref mặc định => const videoRef = useRef() //(Main.js)
 * 2. Đưa qua props ref của Component Video
 * 3. Trong <Video /> có forwardRef() => forwardRef() sẽ nhận được ref
 * 4. forwardRef() xử lý và trả qua đối số thứ 2 | Video(props, ref)
*/

/** useImperativeHandle
 * - useImperativeHandle(ref, callback) //callback return obj | () => ({})
 * 
 */
function Video(props, ref, callback){
    const videoRef = useRef()

    // console.log(props.ref) //return undefined


    useImperativeHandle(ref, () => ({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        },
        
        // custom
        muted(){
            videoRef.current.muted = videoRef.current.muted ? false : true
            console.log('Mute status is: ', videoRef.current.muted)

        },

        playAndPause(){
            // case 1
            videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
            console.log('Video is Paused? ', videoRef.current.paused);

            // case 2
            // if(videoRef.current.paused)
            //     videoRef.current['play']()
            // else
            //     videoRef.current['pause']()
        },

        loop(){
            videoRef.current.loop = videoRef.current.loop ? false : true
            console.log('Loop status is: ', videoRef.current.loop)

        },

        controls(){
            videoRef.current.controls = videoRef.current.controls ? false : true
            console.log('Controls status is: ', videoRef.current.controls)
        }
    }))

    return (
        <video
            ref={videoRef}
            src={video_1}
            width={350}
            // controls
            autoPlay
        ></video>
    )
}

export default forwardRef(Video) 