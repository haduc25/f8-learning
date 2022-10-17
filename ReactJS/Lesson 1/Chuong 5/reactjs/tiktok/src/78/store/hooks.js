import Context from "./Context";
import { useContext } from "react";

// Context = StoreContext
// StoreContext alias name in file index

// export hooks custom
export const useStore = () => {
    // // case 1: Chi tiết
    // const [state, dispatch] = useContext(Context)
    // return [state, dispatch]


    // case 2: Shorthand / Pro vcl
    return useContext(Context)
}


