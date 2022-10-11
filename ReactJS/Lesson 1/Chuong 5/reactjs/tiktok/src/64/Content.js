 //======================> 64 - useRef hook <======================//

 /** Ref 
  * - Lưu các giá trị qua một tham chiếu bên ngoài
  * - Function component
 */

// //===> Ex - Vấn đề của khi k sử dụng 'Ref'
import { useLayoutEffect, useState } from 'react'



function Content(){
    // count / default = 60
    const [count, setCount] = useState(60)


    // handleStart
    const handleStart = () => {
        setInterval(() => {
            // set lai count
            setCount(prevCount => prevCount - 1)
        }, 1000)
    }


    // handleStop
    const handleStop = () => {

    }



    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart} style={{marginRight: '10px'}}>Start</button>
            <button onClick={handleStop} style={{marginLeft: '10px'}}>Stop</button>
        </div>
    )

}









export default Content;