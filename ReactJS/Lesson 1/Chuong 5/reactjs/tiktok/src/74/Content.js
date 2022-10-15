 //======================> 74 - Todo App with useReducer hook <======================//

/** => useReducer()
 *      1. Init state: 0
 *      2. Actions: Up (state + 1) / Down (state - 1)
 *      3. Tạo ra 'Reducer'
 *      4. Dispatch //Kích hoạt 1 action
*/


// ===> Ex - Sử dụng useReducer() / App todoList / Cho trước App todoList chưa xử lý Logic

import { useReducer } from 'react'

function Content() {
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