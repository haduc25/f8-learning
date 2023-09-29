const init = {
    cars: ['Porsche 911', 'Porsche 781', 'Mazda', 'KIA K5']
}

export default function reducer(state = init, action, args){
    /** `reducer()` nhận các tham số giống như bên `core.js`
     * 
     *  Logic chạy trong `core.js`
     *  let state = reducer(): lần đầu tiên chạy k có đối số gì => return về `state` chính là `init` (và đang chứa obj cars)
     *  dispatch(action, ...args){ state = reducer(state, action, args)}: đến khi được gọi mới sẽ truyền `action` vào từ switch case dưới (vd như add, create, delete...)
     */
    switch(action){
        default:
            return state
    }
}