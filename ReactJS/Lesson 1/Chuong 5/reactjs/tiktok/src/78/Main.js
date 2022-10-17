 //======================> 78 - Context + useReducer <======================//
 import { useStore, actions } from "./store" //hooks custom


 function Main(){
    const [state, dispatch] = useStore()
    console.log(state) //return {todos: Array(0), todoInput: ''}

    // lấy ra todos, todoInput => k cần viết ntn: state.todoInput | giờ chỉ cần viết ntn: todoInput
    const { todos, todoInput } = state

    console.log('todoInput: ', todoInput)

    return (
        <div>
            <h2>First Love ❤ | They couldn't kill us. Now, they're dead.</h2>
            <br/>
            
            <input
                value={todoInput}
                placeholder='Enter your todo...'
                onChange={e => {
                    // Cần dispatch action
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
        </div>
    )
 }

 export default Main;