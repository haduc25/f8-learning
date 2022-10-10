 //======================> 59 - useEffect with timer functions <======================//
/** Các trường hợp khi sử dụng 'useEffects'
 * 1. useEffects(callback)
 *  - Gọi 'callback' mỗi khi 'component' re-render
 *  - Gọi 'callback' sau khi 'component' thêm element vào DOM
 * 2. useEffects(callback, [])
 *  - Chỉ gọi 'callback' 1 lần mỗi khi 'component' mounted
 * 3. useEffects(callback, [deps])
 *  - Callback sẽ được gọi lại mỗi khi 'deps' thay đổi
 * ------------------------
 * Trong cả 3 trường hợp trên: 
 *  - 1. 'callback' luôn được gọi sau khi 'component' mounted
 *  - 2. 'Cleanup' function luôn dược gọi trước khi 'component' unmounted
 *  - 3. 'Cleanup' function luôn dược gọi trước khi 'callback'  được gọi (trừ lần mounted)
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