 //======================> 78 - Context + useReducer <======================//
 import { useStore, actions } from "./store" //hooks custom
 import { useRef, useState } from "react"
 import { delTodo } from "./store/actions"
 import './style.css'



 function Main(){
    const [state, dispatch] = useStore()
    const [flag, setFlag] = useState();
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


    // handleEdit
    const handleEdit = (index) => {
        // console.log(index);
        // console.log(todos[index]);

        const todoInputValue = todos[index]
        dispatch(actions.setTodoInput(todoInputValue))

        setFlag(index)
    }


    // handleUpdate
    const handleUpdate = (index) => {
        dispatch(actions.updateTodoInput(todoInput, index))

        // clean
        dispatch(actions.setTodoInput(''))

        // focus
        inputRef.current.focus()
        setFlag()
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

            {flag || flag === 0 ? (<button onClick={() => handleUpdate(flag)}>Sửa</button>) 
                : (<button onClick={handleAdd}>Add new todo</button>)}
            <br/>
            <button onClick={console.clear}>Clear console</button>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button
                        onClick={() => handleEdit(index)}
                        >Edit
                    </button>
                    <button onClick={() =>  dispatch(delTodo(index))}>
                        &times;
                    </button>
                </li>
            ))}
        </div>
    )
 }

 export default Main;