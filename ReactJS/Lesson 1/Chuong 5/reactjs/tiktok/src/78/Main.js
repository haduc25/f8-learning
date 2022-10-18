 //======================> 78 - Context + useReducer <======================//
 import { useStore, actions } from "./store" //hooks custom
 import { useRef } from "react"
import { delTodo } from "./store/actions"


 function Main(){
    const [state, dispatch] = useStore()
    console.log(state) //return {todos: Array(0), todoInput: ''}

    // lấy ra todos, todoInput => k cần viết ntn: state.todoInput | giờ chỉ cần viết ntn: todoInput
    const { todos, todoInput } = state

    // inputRef
    const inputRef = useRef()

    console.log('todoInput: ', todoInput)


    // handleAdd
    const handleAdd = () => {
        // dispatch action / add 
        dispatch(actions.addTodo(todoInput))

        // clean value
        dispatch(actions.setTodoInput(''))

        // focus
        inputRef.current.focus()

    }

    return (
        <div>
            <h2>First Love ❤ | They couldn't kill us. Now, they're dead.</h2>
            <br/>
            
            <input
                ref={inputRef}
                value={todoInput}
                placeholder='Enter your todo...'
                onChange={e => {
                    // Cần dispatch action / set
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />

            <button onClick={handleAdd}>Add new todo</button>
            <br/>
            <button onClick={console.clear}>Clear console</button>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <span onClick={() =>  dispatch(delTodo(index))}>
                        &times;
                    </span>
                </li>
            ))}
        </div>
    )
 }

 export default Main;