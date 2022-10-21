 //======================> 79 - useImperativeHandle hook & forwardRef() <======================//


import Video from './Video'
import { useRef, useEffect } from 'react'

function Main(){
    const videoRef = useRef()

    useEffect(() => {
        console.log(videoRef.current) //return undefined

        // k truyền đc dl
    })

    return(
        <div>
            <h2>Money, baby! This is money!</h2>

            <Video ref={videoRef} />
            <br/>
            <button>Play</button>
            <button>Pause</button>
        </div>
    )
}


export default Main