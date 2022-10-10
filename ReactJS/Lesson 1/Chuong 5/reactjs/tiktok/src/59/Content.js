 //======================> 59 - useEffect with timer functions <======================//

/** Sử dụng 'useEffects(callback, [])'
 

*/

/** Kiến thức cần trong bài
 * Closure (JS Nâng cao) 
 * Timers: setInterval, setTimeout, clearInterval, clearTimeout
*/



/**
* 3. Listen DOM events
*    - Scroll
*    - Resize
*/

/**Tổng kết 
 * - Khi làm việc vs react 'Componnet', mà 'Componnet' có thể bị 'Unmount'
 * - Mà trong 'Componnet' có sử dụng (setInterval, setTimeout, Async, EventListener...)
 * - Khi 'Unmount' phải clear => tránh bị Memory Leak
*/



//===> Ex - setInterval / làm ứng dụng đếm ngược đơn giản / bắt đầu từ 180s
 
import { useEffect, useState } from 'react'


function Content(){
    // cd
    const [countdown, setCountdown] = useState(180)

    // //Ex - Vấn đề về 'Closure' 
    // // - Vì 'countdown' chỉ nằm trong phạm vi gọi 1 lần => luôn lấy gia trị 180
    // // - và khi 'setInterval' gọi đến thì sẽ luôn (180 - 1 = 179) => luôn print ra 179
    // useEffect(() =>{
    //     // setInterval
    //     const setIntervalId = setInterval(() => {
    //         // set lai countdown
    //         setCountdown(countdown -1)
    //         console.log('Value of countdown is: ', countdown);

    //     }, 1000)
    // }, [])




    //Ex - Sử dụng callback
    useEffect(() =>{
        // setInterval
        const timerId = setInterval(() => {
            // set lai countdown
            setCountdown(prevState => prevState - 1)
            console.log('Countdown...')
        }, 1000)

        // clearInterval
        return () => clearInterval(timerId)
    }, [])


    return (
        <div>
            <h2>{countdown}</h2>
        </div>
    )

}




// //===> Ex - setTimeout / làm ứng dụng đếm ngược đơn giản / bắt đầu từ 180s
 
// import { useEffect, useState } from 'react'


// function Content(){
//     // cd
//     const [countdown, setCountdown] = useState(180)

//     // Logic: Vì useEffect(callback, [deps]) & setTimeout chỉ chạy 1 lần => có thể dùng 'countdown'
//     // - đưa 'countdown' và 'deps' => 'countdown' thay đổi => gọi lại 'callback', 'setTimeout'
//     useEffect(() =>{
//         // setTimeout
//         const timerId = setTimeout(() => {
//             // set lai countdown
//             setCountdown(countdown - 1)
//         }, 1000)
//     }, [countdown])


//     return (
//         <div>
//             <h2>{countdown}</h2>
//         </div>
//     )

// }













export default Content;