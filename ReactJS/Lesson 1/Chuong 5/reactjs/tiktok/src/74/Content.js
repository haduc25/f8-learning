 //======================> 74 - Todo App with useReducer hook <======================//

/** => useReducer()
 *      1. Init state
 *      2. Actions
 *      3. Tạo ra 'Reducer'
 *      4. Dispatch //Kích hoạt 1 action
*/

/** => Phân tích bài toán
 *      1. Init state: có 2 state
 *          - state thể hiện input khi người dùng nhập vào / job => string
 *          - state thể hiện danh sách khi nhập xong dữ liệu / jobs => array
 *          *Lưu ý: để dùng nhiều state => cho vào obj
 *      
 *      2. Actions
 *          - Gồm 3 actions: SET_JOB, ADD_JOB, DELETE_JOB
 * 
 *      3. Tạo ra 'Reducer'
 *          - Theo nguyên tắc là hàm(func) nhận vào state, action
 * 
 *      4. Dispatch
 *          - import { useReducer } from 'react'
 * 
 * 
*/


// import
import { useReducer, useRef } from 'react'


// 1. Init state
const initState = {
    job: '',
    jobs: []
}

// 2. Actions
const SET_JOB = 'set_job' //đi set lại (job: '') ở trên
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

/** => Vì cần truyền dữ liệu
 *      - Cần tạo ra 3 action dưới dạng funtion
 *      - return ra obj
 * 
 *  => payload: là dữ liệu mang theo đi
 *      - payload là dữ liệu tương ứng với người dùng gõ vào input (e.target.value)
 */


// setJob
const setJob = payload => {
    return {
        type: SET_JOB,
        payload //payload = payload truyền vào 
    }
}


// addJob
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}


// deleteJob
const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

// checking
// console.log(setJob()); //return {type: 'set_job', payload: undefined}
// console.log(setJob('First Love <3')); //return {type: 'set_job', payload: 'First Love <3'}


// 3. Tạo ra 'Reducer'
const reducer = (state, action) => {
    console.log('Action: ', action)
    console.log('Prev state: ', state)
    
    // tạo ra newState / mục đích có thể console.log ra đc newState
    let newState

    switch(action.type){
        case SET_JOB:
            newState = {
                // update: job '' => cần bảo lưu state bên cạnh
                ...state, //bảo lưu state
                job: action.payload // set lại job
            }
            break

        case ADD_JOB:
            newState = {
                ...state, //bảo lưu state cũ
                // Sửa lại array cũ
                jobs: [...state.jobs, action.payload] //bảo lưu array cũ & thêm job mới
            }
            break

        case DELETE_JOB:
            const newJobs = [...state.jobs] //tránh sửa mảng cũ => lưu vào mảng mới

            /** ==> Để xóa bỏ index => sử dụng splice()
             *  - Array.prototype.splice()
             *  - The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
             *      To access part of an array without modifying it, see slice().
             *  - Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
            */

            // xóa theo index
            newJobs.splice(action.payload, 1) //action.payload vì action.payload = index / 1 là xóa 1 phần tử

            newState = {
                ...state, //bảo lưu state cũ
                // set lại jobs = array mới
                jobs: newJobs
            }
            break
        
        
        default:
                throw new Error('Invalid action.')
    
    }
    
    console.log('New state: ', newState)

    return newState
}


// 4. Dispatch



// ===> Ex - Sử dụng useReducer() / App todoList / Cho trước App todoList chưa xử lý Logic


function Content() {
    // tạo state
    const [state, dispatch] = useReducer(reducer, initState)

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
        <>
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
        </>
    )
}








export default Content;