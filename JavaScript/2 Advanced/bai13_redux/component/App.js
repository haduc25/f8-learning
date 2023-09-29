import html from "../core.js";
import { connect } from "../store.js";

const connector = connect() 

/*// Example1: - select mỗi `cars` trong object `init`
const connector = connect(state => ({
    cars: state.cars
}))
*/

/*
// Example2: - đẩy dữ liệu để lưu vào 1 key mới
const connector = connect(state => ({
    car: state.cars[0],
    cars: state.cars
    // {car: 'Porsche 911', cars: Array(4)}
}))
*/

/** const connector = connect() 
 *  Nhận lại `state` và return ra 1 object mới có `cars` = state.cars
*/

/** const connector = connect() 
 * chạy hàm `connect()` để return về hàm bên trong và nhận đối số là `component`
 * và khi chạy xong nhận lại hàm `connector` là 1 hàm mới
 * hàm `connector` sẽ nhận đối số là `component` => cho nhận luôn là App => export default connector(App)
 */ 

// const App = (props) => {
const App = ({cars, bike}) => {
    /** Mặc định sẽ nhận được dữ liệu là `props`
     * vì `connector` nhận vào `component` xong thực thi `component()` và đẩy dữ liệu từ `state` ngược vào trong `component` (compnent hiện tại đang là App) 
     * và `props` nhận được hết dữ liệu đã được đẩy vào (là dl trong bên core.js & connect() là props, state, ...args)
     * khi truyền merge cả `state` trong `core.js` nên lấy được biến `cars`, `bike` => có thể truyền đc dl từ `Store` sang `View`
     * ở đây đã thay `props` thành `cars` nhưng tương tự 
     * => thay vào đó dùng Destructuring để lấy ra `cars`
     */

    // console.log(props) // {cars: Array(4)}
    // console.log(bike) //['bike1']


    return html`
        <h2>Luv You</h2>
        <ul>
            ${cars.map((car)=> `<li>${car}</li>`) }
        </ul>

        <button onclick="dispatch('ADD', 'Audi')">Add car</button>
        `
        /**  <button onclick="dispatch()">Add car</button>
         * gọi đến function `dispatch` vì trong `store.js` đã tạo ra 1 biến `dispatch` là global
         * `dispatch` nhận `action`, `args`
         * dispatch('ADD', 'Audi')
         * 
         * // giải thích chi tiết
         * khi bắt sự kiện `onclick` gọi đến `dispatch` & truyền sang ` `action` (ở đây là ADD) và value (ở đây là Audi)
         * => thỏa mãn điều kiện nhận vào `state cũ` và chỉnh sửa và đẩy ra `state mới` và gọi hàm `render`
        */
}


export default connector(App)
