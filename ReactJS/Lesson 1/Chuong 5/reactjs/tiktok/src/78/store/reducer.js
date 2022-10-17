// import constants
import { SET_TODO_INPUT } from './constants'

//init State
const initState = {
    todos: [], //array chứa jobs khi đã thêm từ input
    todoInput: '' //dl khi nhập từ input

} 

// reducer
function reducer (state, action){
    switch(action.type){
        case SET_TODO_INPUT:
            return {
                //bảo lưu state cũ & set lại todoInput
                ...state,
                todoInput: action.payload
            }

        default:
            throw new Error('Invalid action!')
    }
}

export { initState }
export default reducer