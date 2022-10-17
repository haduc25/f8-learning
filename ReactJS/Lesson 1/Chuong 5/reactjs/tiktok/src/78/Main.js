 //======================> 78 - Context + useReducer <======================//
 import { useStore } from "./store" //hooks custom


 function Main(){
    const [state, dispatch] = useStore()
    console.log(state) //return {todos: Array(0), todoInput: ''}

    

    return (
        <div>
            <h2>First Love ❤ | They couldn't kill us. Now, they're dead.</h2>
        </div>
    )
 }

 export default Main;