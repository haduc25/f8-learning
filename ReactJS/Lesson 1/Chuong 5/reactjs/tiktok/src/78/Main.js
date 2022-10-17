 //======================> 78 - Context + useReducer <======================//
 import { useContext } from "react";
 import { StoreContext } from "./store"


 function Main(){
    const [state, dispatch] = useContext(StoreContext)
    console.log(state) //return {todos: Array(0), todoInput: ''}

    

    return (
        <div>
            <h2>First Love ❤ | They couldn't kill us. Now, they're dead.</h2>
        </div>
    )
 }

 export default Main;