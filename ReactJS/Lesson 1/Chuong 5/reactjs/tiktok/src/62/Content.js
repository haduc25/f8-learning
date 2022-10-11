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



// //===> Ex - Vấn đề của 'useEffect' | Xửa lý bài toán số (0 - 3)
import { useEffect, useState } from 'react'



function Content(){
    // count / default = 0
    const [count, setCount] = useState(0)

    // handleRun
    const handleRun = () => {
        // set lai count
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Click to Run</button>
        </div>
    )

}












export default Content;