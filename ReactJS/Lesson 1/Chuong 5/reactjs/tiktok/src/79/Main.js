 //======================> 79 - useImperativeHandle hook & forwardRef() <======================//


import Video from './Video'
import { useRef, useEffect } from 'react'

function Main(){
    const videoRef = useRef()

    useEffect(() => {
        console.log(videoRef.current) //return undefined | {play: ƒ, pause: ƒ}

        // k truyền đc dl => phải dùng forwardRef()
    })


    // handlePlay
    const handlePlay = () => {
        // xảy ra vấn đề bảo mật -> có thể xóa Element, rủi ro
        // videoRef.current.remove()

        videoRef.current.play()
    }

    // handlePause
    const handlePause = () => {
        videoRef.current.pause()
    }

    return(
        <div>
            <h2>Money, baby! This is money!</h2>

            <Video ref={videoRef} />
            <br/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}


export default Main