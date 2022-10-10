 //======================> 60 - useEffect with preview avatar <======================//

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
 *  - 2. 'Cleanup' function luôn dược gọi trước khi 'component' unmounted / bai 59
 *  - 3. 'Cleanup' function luôn dược gọi trước khi 'callback'  được gọi (trừ lần mounted) / bai 60
 */


//===> Ex - 3. 'Cleanup' function luôn dược gọi trước khi 'callback'  được gọi (trừ lần mounted)

import { useEffect, useState } from 'react'


function Content(){
    const [count, setCount] = useState(1)

    // count = deps => count tăng callback đc gọi
    useEffect(() =>{
        console.log(`Mounted or Re-render`);

        // Clear func
        return () => console.log(`Cleanup`);
    }, [count])


    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}> Click me ^^</button>
        </div>
    )

}











export default Content;