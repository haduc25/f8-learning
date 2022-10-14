 //======================> 72 - useReducer hook <======================//


/** => useReducer() dùng để làm gì?
 *  - Thêm sự lựa chọn để sử dụng 'state' cho 'function Component'
 *  - Khi gặp 1 bài toán dùng 'useState()' giải quyết được thì 'useReducer()' cũng giải quyết được 
 *  - & ngược lại 'useReducer()' giải quyết được thì 'useState()' cũng giải quyết được
 * 
 *  => Khi nào thì dùng 'useState()' & 'useReducer()'
 *  useState()
 *  - Hầu hết mọi trường hợp
 *  - Những 'Component' có 'state' đơn giảm (kiểu dl là: số, chuỗi, boolean, array, obj(nhưng chỉ 1 cấp, k lồng nhiều cấp)... )
 *  - Số lượng 'state' trong 'Component' ít
 * 
 *  useReducer()
 *  - Phù hợp với những tình huống 'state' phức tạp
 *  - Kiểu dữ liệu không phải nguyên thủy (array, obj nhưng nhiều tầng, nhiều lớp / array con, obj con)
 *  - Có nhiều 'state'
 *  - Giúp đơn giản hóa khi gặp dữ liệu 'state' phức tạp, code ngắn gọn hơn, có thể tách ra file riêng
 * 
*/


/** Phân tích bài toán khi sử dụng 'useState()' & 'useReducer()'
 * => useState()
 *      1. Init state: 0
 *      2. Actions: Up (state + 1) / Down (state - 1)
 * 
 * 
 * => useReducer()
 *      1. Init state: 0
 *      2. Actions: Up (state + 1) / Down (state - 1)
 *      3. Tạo ra 'Reducer'
 *      4. Dispatch //Kích hoạt 1 action
*/



// // ===> Ex - Sử dụng useState() / App đếm số
// import { useState } from 'react'

// function Content() {
//     // count
//     const [count, setCount] = useState(0)

//     return (
//         <>
//             <h2>{count}</h2>

//             <button onClick={() => setCount(count + 1)}>Up</button>
//             <br/>
//             <button onClick={() => setCount(count - 1)}>Down</button>
//         </>
//     )
// }




// ===> Ex - Sử dụng useReducer() / App đếm số
import { useReducer } from 'react'


// Tạo ra Init state
const initState = 0

// Tạo ra Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'


// Tạo ra Reducer

/** Reducer
 *  - const reducer = (state, action) => {}
 *  - là 1 hàm, nhận đầu vào là (state, action)
 *  - hoạt động dựa trên nguyên tắc: nhận đầu vào & trả ra đầu ra mới (Input / Output)
 *  - Input nhận vào là: state hiện tại(state) & hành động(action)
 *  - khi 'reducer' được gọi phải dựa vào (state) & (action) là gì ? để quyết định đc trả ra (state) mới là gì?
 *  - Ex: state = UP_ACTION => return state + 1, DOWN_ACTION => return state - 1
 *  - state ban đầu = initState / ở bài này = 0
 *  - state cùng kiểu vs initState
 */

const reducer = (state, action) => {
    // Chứng minh: function reducer k được gọi lần đầu
    console.log('reducer running... & action is: ', action);

    switch(action){
        case UP_ACTION:
            return state + 1 //return state moi
        case DOWN_ACTION:
            return state - 1 //return state moi
        default:
            throw new Error('Invalid action!')    
    }
}



function Content() {
    // count / sử dụng 'useReducer'

    /** useReducer()
     *  - là 1 function nhận 3 đối số, nhưng trong thực tế chỉ dùng 2 đối số
     *  - useReducer(reducer, initState)
     * 
     * ==> Nguyên lý hoạt động
     *  - Khi 'Component' lần đầu chạy -> chạy useReducer() 
     *  - nhận 'reducer' nhưng 'reducer' là hàm -> chưa gọi hàm
     *  - nhận 'initState' return về array[count, dispatch] 
     *  - 1. count = initState | ở bài này = 0
     *  - 2. dispatch: sử dụng để kích hoạt 'action'
     */
    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <>
            <h2>{count}</h2>

            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
            <br/>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        </>
    )
}








export default Content;