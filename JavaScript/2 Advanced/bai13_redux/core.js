
// dùng `destructuring` để lấy chuỗi
export default function html([first, ...strings], ...values){
    // Áp dụng `Tagged template literals`
    // tham số 1 lấy chuỗi đầu tiên `first` và toán tử `rest` để lấy phần còn lại `...strings`
    // tham số 2 nhận tất cả biến nội suy lưu vào biến `values`

    // dùng reduce
    return values.reduce(
        // reduce: nhận lại biến tích trữ(acc) & current value(curr)
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
        // khi đc gọi lại thì `acc` là array có `[first]` 
        // acc.concat(cur, strings.shift(): + dùng concat() nối mảng vs `cur` và nối vs chuỗi tiếp theo `strings.shift()` để lấy phần tử đầu tiên và xóa luôn pt đầu tiên

        // output
        // (7) ['\n<ul>\n    <h2>', false, '</h2>\n    ', '<li>Mazda</li>', '<li>Porsche</li>', '<li>Mercedes</li>', '  \n</ul> \n']
    )
    .filter(x => x && x !== true || x === 0) //logic (x => x && x !== true || x === 0): lấy tất cả giá trị `Truthy` trừ `True` và lấy cả giá trị === 0
    .join('')

    /** .filter(x => x && x !== true || x === 0) <=> .filter(element => element && element !== true || element === 0)
     * 
     * x && x !== true: Điều kiện này kiểm tra xem x có giá trị thỏa mãn (không bằng false, null, undefined, hoặc giá trị trống) và không phải là true hay không. Nếu x là một giá trị falsy (ví dụ: false, null, undefined, 0, '', NaN), thì nó không thỏa mãn điều kiện này.
     * x === 0: Điều kiện này kiểm tra xem x có bằng 0 hay không. Nếu x bằng 0, thì nó thỏa mãn điều kiện này.
     * 
    */
}


export function createStore(reducer) {
    // Nguyên tắc: khi create store thì cần lấy giá trị của `Reducers` vậy nên nhận 1 callback là `reducer`
    // dự liệu trong `store` gọi là `state`
    /** Logic
     * - khi gọi đến `createStore()` thì truyền `callback` và trong `callback` là `reducer` và sẽ return lại dữ liệu bạn đầu của `store` và lưu vào biến `state`
     */
    let state = reducer()
    const roots = new Map() // chứa root element để render ra view
    // Map() - có tính chất lặp qua nó, có thể đặt `key` là bất cứ kiểu dl gì trong js


    function render(){
        for (const [root, component] of roots) {
            /** dùng Destructuring lấy giá trị và lưu vào root & component (thành phần chứa `View`) => lấy dl trong Map()
             * component: là 1 function sẽ return ra chuỗi html và lưu vào output (const output = component())
             * khi chạy component() sẽ nhận lại dữ liệu (ở đây component là hàm App nên sẽ nhận đc dl trong hàm html ở App.js) 
             * và lưu vào output rồi đẩy vào `root`
             */

            const output = component() 
            root.innerHTML = output; //đẩy html vào output => đẩy vào View (root)
        }
    }

    return {
        attach(component, root){
            // attach: nhận View và đẩy ra `root` ở index.html

            // set lại cho object roots (Map) - sửa dụng Object.set() method để set lại dữ liệu
            roots.set(root, component) //key là root (là object) & value (là component)
            render() // sau khi set() xong có dữ liệu thì sẽ render lại ra View
        },
        
        // method kết nối từ `Store` vs `View`
        connect(selector = state => state){
            /**
             * Nhận vào là `selector` & mặc định return lại tất cả `state`
             * selector: để lựa chọn 1 dữ liệu nào đó cụ thể trong `Store`
             * selector = state => state: hàm `selector` nhận đối số là 1 biến(state) và sẽ return lại biến đó (state)
             */

            /** Logic trong hàm `connect`
             * return lại 1 hàm khác & hàm đó sẽ nhận đối số là `component`
             * (props, ...args): và trong `component` lại return 1 function trong function đó nhận 1 giá trị là `props` và đối số thứ 2 là toán tử rest `...props` để nhận tất cả args của func
             * component(): và return và thực thi hàm `component()` | mong muốn khi thực thi đẩy hết dữ liệu của `props`, `args`, `state` vào trong `component`
             * => vì cả 3 đều là Object nên dùng `Object.assign()` để merge và 1 object mới
             * selector(state): nhận 1 đối số và return lại đối số đó 
             * 
             * giải thích theo chatGPT - rewrite
             * ////////////////////////////////////////////
             * function connect(selector = state => state) {
                // Hàm connect nhận một selector và trả về một hàm mới
                return function (component) {
                    // Hàm này nhận một component và trả về một hàm chấp nhận props và args
                    return function (props, ...args) {
                    // Hàm này nhận props và args, sau đó thực hiện các bước sau:
                    // 1. Gộp props với kết quả của selector(state)
                    // 2. Gộp kết quả với các tham số args
                    // 3. Gọi component với kết quả đã được gộp

                    const stateProps = selector(state); // Lấy kết quả từ selector(state)
                    const combinedProps = Object.assign({}, props, stateProps, ...args); // Gộp props và kết quả từ selector

                    return component(combinedProps); // Gọi component với kết quả đã được gộp
                    };
                };
                }
             * ////////////////////////////////////////////

             * giải thích lại theo ý hiểu
             * return component => (props, ...args) =>: hàm component nhận 1 component và return về 1 function nhận vào (props, ...args)
             * hàm nhận `(props, ...args)` thực hiện gộp `Object.assign({}, props, selector(state), ...args)`
             * và trả về component với kết quả đc gộp
             */
            return component => (props, ...args) =>
                component(Object.assign({}, props, selector(state), ...args))
        },

        // method giúp `View` có thể thực hiện ` hành động (dispath)
        dispatch(action, ...args){
            /** dispatch() là thực hiện hành động nên nhận vào mô tả `action` và đẩy sang cho `reducer` và nhận `...args`
             *  khi dispatch() được thực thi => gọi lại reducer()
             *  `reducer` nhận lại giá trị trước đó đã return `state` và `action`, `args`
             * 
             * //cach hoat dong
             * ban đầu `state` là (let state = reducer()) nhma sau khi `dispatch` 1 `action` nào đó thì truyền `action` vào `reducer`
             * `reducer(state, action, args)`: `reducer` dựa vào `action` và đi sửa `state` và return lại `state` mới 
             * ` state(state mới) = reducer(state(state cũ), action, args)`
             * => `Store` được update lại -> `View` phải thay đổi (gọi render)
             * 
             * 
             * // giải thích chi tiết
             * khi `dispatch` đc chạy thì gọi đến `reducer` lấy giá trị `state lần trước đó (state = reducer() là đang có là `init` làm đối số đầu vào và đẩy `action`, dữ liệu mới sang)`
             */     
            state = reducer(state, action, args)
            render()
        }
    }
}