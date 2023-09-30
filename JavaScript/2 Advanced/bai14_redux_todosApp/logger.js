export default function logger(reducer){
    /** logger 
     * nhận `reducer`
     * và phải return lại 1 hàm (để đúng với điều kiện)
     * 
     * //logic của logger
     * là 1 hàm ôm `reducer`
     * và vẫn trả ra đúng format mà `createStore()` cần
     * `createStore()` cần 1 hàm và hàm đó trả ra giá trị khởi tạo cho `state`
     * khi hàm `reducer` bên trong `logger` được gọi vẫn trả ra `state`
     * vậy nên trong `withLogger()` được chạy vẫn trả ra `state` 
     * chỉ khác là viết ra `preState` và `nextState` để ghi log
     * 
    */
   return (preState, action, args) => {
    console.group(action)
    console.log('Pre State: ', preState)
    console.log('Action arguments: ', args)
    
    // trong hàm này phải nhận các đối số giống `reducer` 
    const nextState = reducer(preState, action, args) // gọi lại `reducer` truyền `preState`
    
    console.log('Next State: ', nextState)
    console.groupEnd()
    return nextState
   }
}