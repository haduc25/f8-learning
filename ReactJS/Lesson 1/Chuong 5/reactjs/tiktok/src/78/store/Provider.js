import { useReducer } from 'react'
import Context from './Context'
import reducer, { initState } from './reducer'
import logger from './logger'

// tao provider
function Provider({ children }){
    // tao state
    const [state, dispatch] = useReducer(logger(reducer), initState)

    return(
        //value: truyền qua array cho tất cả các Component bên dưới đều có thể lấy được state & dispatch
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider