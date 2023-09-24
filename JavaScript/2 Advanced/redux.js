// import { createStore } from 'https://cdn.skypack.dev/redux';

/////////////////////////////// MY REDUX ///////////////////////////////
const createStore = (reducer) => {
    let state = reducer(undefined, {}) 
    const subscribers = []
    /**reducer(undefined, {})
     *  `undefined` là k truyền để lấy giá trị mặc định là `initState` ở (state = initState)
     *  `{}` truyền là obj rỗng thì đến lúc switch case k lỗi và lần đầu chạy rơi vào case `default` => state = 0
    */  

    // console.log(state) //0

    return {
        getState(){
            return state //trả về state hiện tại
        },
        dispatch(action){
            // nhận vào `action` 
            console.log(action) //{type: 'DEPOSIT', payload: 10} | {type: 'WITHDRAW', payload: 10}
            
            state = reducer(state, action)

            /** Reducer
             * lấy `state` của bước trước đó và đưa vào `action` => `oldState + newAction`
             * reducer(state, action) => state: đang là `state cũ`, action: đang là `action mới` đưa vào `reducer()` thực hiện logic
             * và trả về state mới => state(đây là `state mới`) = reducer(state, action)
            */

            // subscriber
            subscribers.forEach(subscriber => subscribe()); 
            // subscribers.forEach(subscriber => subscribe()); sẽ duyệt qua mỗi phần tử trong mảng subscribers và gọi hàm subscribe() một lần cho mỗi phần tử trong mảng đó.
            //tại sao subscribe() là hàm? vì hàm subscribe mà thằng store trả về nhận đối số là 1 function nên mỗi lần state cập nhật thì ta lại gọi thằng subscriber để thông báo
        },
        subscribe(subscriber){
            // nhận vào `subscriber` 
            subscribers.push(subscriber) //thêm vào array
        }
    }
}

















/////////////////////////////// MY APP ///////////////////////////////
const initState = 0

// Reducer
const bankReducer = (state = initState, action) => {
    switch(action.type){
        case 'DEPOSIT':
            return state + action.payload; //state: số tiền hiện tại | action.payload => số tiền nạp vào
            break; 
        case 'WITHDRAW':
            return state - action.payload;
            break;
        default:
            return state
    }
}

// Store
// const store = createStore(bankReducer) // tạo store và lưu vào biến `store`
const store = window.store = createStore(bankReducer) // `window.store` để có thể truy cập từ window (console trên browser) 
console.log(store) // {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}

// Actions
const actionDeposit = (payload) => {
    return {
        type: 'DEPOSIT',
        payload
    }
}

const actionWithdraw = (payload) => {
    return {
        type: 'WITHDRAW',
        payload
    }
}

// DOM events
const deposit = document.querySelector('#deposit')
const withdraw = document.querySelector('#withdraw')

// Event handler
deposit.onclick = function(){
    store.dispatch(actionDeposit(10))
    render()

    // console.log('+$10')
}

withdraw.onclick = function(){
    store.dispatch(actionWithdraw(10))
    render()

    // console.log('-$10')
}

// Listener
store.subscribe(() => console.log('State update xong => ', store.getState()))
store.subscribe(() => console.log('State update xong 2 => ', store.getState()))
store.subscribe(() => console.log('State update xong 3 => ', store.getState()))
store.subscribe(() => console.log('State update xong 4 => ', store.getState()))


// Render to UI
const render = () => {
    const output = document.querySelector('#output')
    output.innerText = store.getState()
    
    // console.log(store.getState())
}

render()
