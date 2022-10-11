 //======================> 64 - useRef hook <======================//

 /** Ref 
  * - Lưu các giá trị qua một tham chiếu bên ngoài
  * - Function component
 */



 
// // //===> Ex - Vấn đề của khi k sử dụng 'Ref' | Ngoài phạm vi hàm khi re-render
// import { useState } from 'react'



// // let timerId //Viết ntn thì vẫn chạy tốt nhưng k nên dùng :> / hãy dùng Ref 


// function Content(){
//     // count / default = 60
//     const [count, setCount] = useState(60)

//     // let timerId //theo logic thông thường

//     // handleStart
//     const handleStart = () => {
//         timerId = setInterval(() => {
//             // set lai count
//             setCount(prevCount => prevCount - 1)
//         }, 1000)
//         console.log('Start -> ', timerId);
//     }


//     // handleStop
//     const handleStop = () => {
//         // cleanup
//         clearInterval(timerId)
//         console.log('Stop -> ', timerId);
//     }



//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleStart} style={{marginRight: '10px'}}>Start</button>
//             <button onClick={handleStop} style={{marginLeft: '10px'}}>Stop</button>
//         </div>
//     )

// }







// // //===> Ex - Ví dụ sử dụng 'Ref' 
// import { useRef, useState } from 'react'


// function Content(){
//     /** ==> useRef(initialValue);
//      * Chỉ nhận giá trị khởi tạo lần đầu, khi re-render k dùng lại
//      * Return về obj có property là 'current' & value = initialValue
//      */
    
//     const ref = useRef(99)
//     console.log(ref); //return {current: 99}
//     console.log(ref.current); //return 99



//     return (
//         <div>
//             <h2>Ex - Ví dụ sử dụng 'Ref' | Open Devtool -> console</h2>
//         </div>
//     )

// }






// // //===> Ex - Demo cách hoajt động của 'Ref' 
// import { useRef, useState } from 'react'


// function Content(){
//     // count / default = 60
//     const [count, setCount] = useState(60)
    
//     const ref = useRef(99)
//     console.log('Value of ref is: ',ref.current);

//     // ref: k bị reset lại value là 99 mà luôn lấy giá trị mới từ Math.random()


//     let timerId;

//     // handleStart
//     const handleStart = () => {
//         timerId = setInterval(() => {
//             // set ref = random

//             ref.current = Math.random()

//             // set lai count
//             setCount(prevCount => prevCount - 1)
//         }, 1000)
//         console.log('Start -> ', timerId);
//     }


//     // handleStop
//     const handleStop = () => {
//         // cleanup
//         clearInterval(timerId)
//         console.log('Stop -> ', timerId);
//     }



//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleStart} style={{marginRight: '10px'}}>Start</button>
//             <button onClick={handleStop} style={{marginLeft: '10px'}}>Stop</button>
//         </div>
//     )

// }







// // // //===> Ex - Sử dụng 'Ref' khắc phục vấn đề trên
// import { useRef, useState } from 'react'




// // được ref nó đưa ra đây nè!

// function Content(){
//     // count / default = 60
//     const [count, setCount] = useState(60)

//     // gán mặc định ref = undefined 
//     const timerId = useRef()

//     // handleStart
//     const handleStart = () => {
//         // Logic: khi start -> id của 'setInterval' sẽ được lưu vào 'timerId.current' -> được đưa ra ngoài tham chiếu của App()
//         timerId.current = setInterval(() => {
//             // set lai count
//             setCount(prevCount => prevCount - 1)
//         }, 1000)
//         console.log('Start -> ', timerId.current);
//     }


//     // handleStop
//     const handleStop = () => {
//         // vì được ref đưa ra ngoài => có thể clean đc 
//         // cleanup
//         clearInterval(timerId.current)
//         console.log('Stop -> ', timerId.current);
//     }



//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleStart} style={{marginRight: '10px'}}>Start</button>
//             <button onClick={handleStop} style={{marginLeft: '10px'}}>Stop</button>
//         </div>
//     )

// }







// // // //===> Ex - Lấy giá trị hiện tại & trước đó của 'State'
// import { useRef, useState, useEffect } from 'react'



// function Content(){
//     // count / default = 60
//     const [count, setCount] = useState(60)

//     // ref for timerId | default = undefined 
//     const timerId = useRef()

//     // ref for prevCount (lấy giá trị trước đó của 'count') | default = undefined 
//     const prevCount = useRef()

//     // useEffect | count = deps
//     useEffect(() => {
//         // lưu 'count' vào 'prevCount'
//         prevCount.current = count;
//         console.log('Prev Count inside useEffect is: ', prevCount.current); //ban dau lay gia tri la 60
//     }, [count])


//     // handleStart
//     const handleStart = () => {
//         timerId.current = setInterval(() => {
//             // set lai count
//             setCount(prevCount => prevCount - 1)
//         }, 1000)
//         console.log('Start -> ', timerId.current);
//     }

//     console.log(`Count: ${count}, PreCount: ${prevCount.current}`);

//     // handleStop
//     const handleStop = () => {
//         // cleanup
//         clearInterval(timerId.current)
//         console.log('Stop -> ', timerId.current);
//     }



//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleStart} style={{marginRight: '10px'}}>Start</button>
//             <button onClick={handleStop} style={{marginLeft: '10px'}}>Stop</button>
//         </div>
//     )

// }







// // // //===> Ex - Lấy giá trị hiện tại & trước đó của 'State' | giống trên nhưng clean hơn khi print ra console
// import { useRef, useState, useEffect } from 'react'



// function Content(){
//     // count / default = 60
//     const [count, setCount] = useState(60)

//     // ref for timerId | default = undefined 
//     const timerId = useRef()

//     // ref for prevCount (lấy giá trị trước đó của 'count') | default = undefined 
//     const prevCount = useRef()

//     // useEffect | count = deps
//     useEffect(() => {
//         prevCount.current = count;
//     }, [count])


//     // handleStart
//     const handleStart = () => {
//         timerId.current = setInterval(() => {
//             // set lai count
//             setCount(prevCount => prevCount - 1)
//         }, 1000)
//         console.log('Start -> ', timerId.current);
//     }

//     console.log(count, prevCount.current);

//     // handleStop
//     const handleStop = () => {
//         // cleanup
//         clearInterval(timerId.current)
//         console.log('Stop -> ', timerId.current);
//     }



//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleStart} style={{marginRight: '10px'}}>Start</button>
//             <button onClick={handleStop} style={{marginLeft: '10px'}}>Stop</button>
//         </div>
//     )

// }






// // //===> Ex - Dùng Ref lưu giá trị DOM Element
import { useRef, useState, useEffect } from 'react'



function Content(){
    // count / default = 60
    const [count, setCount] = useState(60)

    // ref for timerId | default = undefined 
    const timerId = useRef()

    // ref for prevCount (lấy giá trị trước đó của 'count') | default = undefined 
    const prevCount = useRef()

    // useEffect | count = deps
    useEffect(() => {
        prevCount.current = count;
    }, [count])


    // handleStart
    const handleStart = () => {
        timerId.current = setInterval(() => {
            // set lai count
            setCount(prevCount => prevCount - 1)
        }, 1000)
        console.log('Start -> ', timerId.current);
    }

    console.log(count, prevCount.current);

    // handleStop
    const handleStop = () => {
        // cleanup
        clearInterval(timerId.current)
        console.log('Stop -> ', timerId.current);
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