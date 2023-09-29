const init = {
    cars: ['Porsche 911', 'Porsche 781', 'Mazda', 'KIA K5'],
    bike: ['bike1']
}

export default function reducer(state = init, action, args){
    /** `reducer()` nhận các tham số giống như bên `core.js`
     * 
     *  Logic chạy trong `core.js`
     *  let state = reducer(): lần đầu tiên chạy k có đối số gì => return về `state` chính là `init` (và đang chứa obj cars)
     *  dispatch(action, ...args){ state = reducer(state, action, args)}: đến khi được gọi mới sẽ truyền `action` vào từ switch case dưới (vd như add, create, delete...)
     */

    console.log(action, args) // ADD ['Audi']
    
    switch(action){
        case 'ADD':
            // Audi đang nằm trong mảng của `args` nên lấy ra
            const [newCar] = args
            return {
                ...state, // giải data từ `state` cũ vào object mới 
                cars: [...state.cars, newCar]  // giải object cũ của `cars` & thêm car mới (newCar) vào cuối mảng
            }

            /** Giải thích
             * Và khi `action` là `ADD` thì lấy dữ liệu mới từ `args` lưu vào `newCar` và return về object mới
             * object được tạo nên từ object cũ => nhưng được sửa lại `cars` bằng cách thêm `newCar` vào cuối array rồi return ra ngoài
             */

            break;

        default:
            return state
    }
}