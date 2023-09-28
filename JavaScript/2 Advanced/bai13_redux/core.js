
// dùng `destructuring` để lấy chuỗi
export default function html([first, ...strings], ...values){
    // Áp dụng `Tagged template literals`
    // tham số 1 lấy chuỗi đầu tiên `first` và toán tử `rest` để lấy phần còn lại `...strings`
    // tham số 2 nhận tất cả biến nội suy lưu vào biến `values`

    // dùng reduce
    return values.reduce(
        // reduce: nhậm lại biến tích trữ(acc) & current value(curr)
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
        // khi đc gọi lại thì `acc` là array có `[first]` 
        // acc.concat(cur, strings.shift(): + dùng concat() nối mảng vs `cur` và nối vs chuỗi tiếp theo `strings.shift()` để lấy phần tử đầu tiên và xóa luôn pt đầu tiên

        // output
        // (7) ['\n<ul>\n    <h2>', false, '</h2>\n    ', '<li>Mazda</li>', '<li>Porsche</li>', '<li>Mercedes</li>', '  \n</ul> \n']
    )
    .filter(x => x && x !== true || x === 0) //logic (x => x && x !== true || x === 0): lấy tất cả giá trị `Truthy` trừ `True` và lấy cả giá trị === 0
    .join('')
}


export function createStore(reducer) {
    // Nguyên tắc: khi create store thì cần lấy giá trị của `Reducers` vậy nên nhận 1 callback là `reducer`
    // dự liệu trong `store` gọi là `state`
    let state = reducer() //
}