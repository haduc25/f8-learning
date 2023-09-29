import html from "../core.js";
import { connect } from "../store.js";

const connector = connect() 

/** const connector = connect() 
 * chạy hàm `connect()` để return về hàm bên trong và nhận đối số là `component`
 * và khi chạy xong nhận lại hàm `connector` là 1 hàm mới
 * hàm `connector` sẽ nhận đối số là `component` => cho nhận luôn là App => export default connector(App)
 */ 

const App = (props) => {
    /** Mặc định sẽ nhận được dữ liệu là `props`
     * vì `connector` nhận vào `component` xong thực thi `component()` và đẩy dữ liệu từ `state` ngược vào trong `component` (compnent hiện tại đang là App) 
     * và `props` nhận được hết dữ liệu đã được đẩy vào (là dl trong bên core.js & connect() là props, state, ...args)
     */

    console.log(props) // {cars: Array(4)}


    return html`
        <h2>I loved Porsche 781</h2>
        <ul>

        </ul>
    `
}


export default connector(App)
