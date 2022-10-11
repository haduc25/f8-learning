 //======================> 62 - useLayoutEffect hook <======================//

/** So sánh 'useEffect' vs 'useLayoutEffect'
 *  useEffect
 * // 1. Câp nhât lai state
 * // 2. Câp nhât DOM (mutated)
 * // 3. Render lai UI
 * // 4. Goi cleanup néu deps thay doi
 * // 5. Goi useEffect callback
 * 
 * 
 * useLayoutEffect
 * // 1. Câp nhât lai state
 * // 2. Câp nhât DOM (mutated)
 * // 3. Goi cleanup néu deps thay doi (sync)
 * // 4. Goi useLayoutEffect callback (sync)
 * // 5. Render lai UI
 */



// // //===> Ex - Vấn đề của 'useEffect' | Xửa lý bài toán số (0 - 3) limited = 3
// import { useEffect, useState } from 'react'



// function Content(){
//     // count / default = 0
//     const [count, setCount] = useState(0)

//     // Vấn đề vs 'useEffect' / count = deps
//     useEffect(() => {
//         if(count > 3) 
//             setCount(0)
//     }, [count])

//     // Vì 'useEffect' update(mutated) lại DOM -> render UI -> gọi callback / => lúc render UI (count = 4) -> gọi callback kt dk (count = 0) => trường hợp số bị giật từ 4 -> 0

//     // handleRun
//     const handleRun = () => {
//         // set lai count
//         setCount(count + 1)
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleRun}>Click to Run</button>
//         </div>
//     )

// }





// //===> Ex - Sử dụng 'useLayoutEffect' giải quyết vấn đề của 'useEffect'
import { useLayoutEffect, useState } from 'react'



function Content(){
    const [count, setCount] = useState(0)

    // useLayoutEffect
    useLayoutEffect(() => {
        if(count > 3) 
            setCount(0)
    }, [count])

   // Vì 'useLayoutEffect' update(mutated) lại DOM -> gọi callback -> render UI / => khắc phục được vấn đề củ 'useEffect' vì render UI sau cùng

    // handleRun
    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Click to Run</button>
        </div>
    )

}


/** ===> Tình huống để sửa dụng
 * - 'setSate' -> xong lại check 'state' trong 'useEffect'
 */









export default Content;