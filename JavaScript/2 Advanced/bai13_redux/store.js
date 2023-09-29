import { createStore } from "./core.js";
import reducer from "./reducer.js";

const { attach, connect, dispatch} = createStore(reducer) // lấy ra các method từ `createStore`

// đặt function dispatch thành global (có thể sử dụng bất cứ đâu)
window.dispatch = dispatch

export {
    attach,
    connect
}