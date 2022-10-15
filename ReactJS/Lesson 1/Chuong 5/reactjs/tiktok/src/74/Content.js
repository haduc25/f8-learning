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
import { useReducer } from 'react'


// 1. Init state
const initState = {
    job: '',
    jobs: []
}

// 2. Actions
const SET_JOB = 'set_job' //đi set lại (job: '') ở trên
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

// 3. Tạo ra 'Reducer'
const reducer = (state, action) => {

}


// 4. Dispatch



// ===> Ex - Sử dụng useReducer() / App todoList / Cho trước App todoList chưa xử lý Logic


function Content() {
    // tạo state
    const [state, dispatch] = useReducer(reducer, initState)

    console.log(state); //return {job: '', jobs: Array(0)}

    // dùng destructuring lấy dl ra
    const { job, jobs } = state

    return (
        <>
            <h3>TodoList</h3>
            <input
                placeholder='Enter your new todo...'
            />
            <button>Add new todo</button>
            <ul>
                <li>First Love &times;</li>
                <li>Learning React &times;</li>
                <li>Selling Account Valorant &times;</li>
            </ul>
        </>
    )
}








export default Content;