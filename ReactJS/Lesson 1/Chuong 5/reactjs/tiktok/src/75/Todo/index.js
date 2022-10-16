 //======================> 75 - useReducer recap <======================//


/** => useReducer()
 *      1. Init state
 *      2. Actions
 *      3. Tạo ra 'Reducer'
 *      4. Dispatch //Kích hoạt 1 action
*/

// import
import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { setJob, addJob, deleteJob } from './actions'
import logger from './logger'


// 2. Actions => File: constants.js, actions.js

// 1. Init state + 3. Tạo ra 'Reducer' => File: reducer.js

// 4. Dispatch  => File: index.js

// ===> Ex - Sử dụng useReducer() / App todoList / Cho trước App todoList chưa xử lý Logic
function Content() {
    // // tạo state
    // const [state, dispatch] = useReducer(reducer, initState)

    // dung logger
    const [state, dispatch] = useReducer(logger(reducer), initState)

    /** Tạo ra logger() ôm reducer nhưng vẫn hoạt động
     * logger(reducer)
     * - Trong hàm cần return lại 'reducer'
     */

    // console.log(state); //return {job: '', jobs: Array(0)}

    // dùng destructuring lấy dl ra
    const { job, jobs } = state

    // lấy element input
    const inputRef = useRef()

    // handleSubmit
    const handleSubmit = () => {
        // dispatch
        dispatch(addJob(job)) //truyền job hiện tại
        dispatch(setJob('')) //cleanup text sau khi added
        // focus
        inputRef.current.focus()
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>TodoList</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder='Enter your new todo...'
                onChange={e => {
                    // Cần lấy dữ liệu: e.target.value => truyền lên reducer
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add new todo</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        {/* truyền index vào để xóa / index = payload */}
                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}








export default Content;