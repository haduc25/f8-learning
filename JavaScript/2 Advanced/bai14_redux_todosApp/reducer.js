import storage from "./utils/storage.js"


const init = {
    // todos: [
    //     {
    //         title: 'Learn Javascript',
    //         completed: false,
    //     },
    //     {
    //         title: 'Learn PHP, Python',
    //         completed: true,
    //     },
    //     {
    //         title: 'Learn ReactJS',
    //         completed: true,
    //     },
    // ]

    todos: storage.get(), // ban đầu lấy dữ liệu từ Storage
    // tạo ra điều kiện lọc
    filter: 'all',
    filters: {
        // chứa điều kiện lọc
        all: () => true, // khi hiển thị tất cả => return true
        active: todo => !todo.completed, // nhận `todo` chỉ hiển thị ra todo.completed = fasle
        completed: todo => todo.completed // chỉ hiển thị ra todo.completed = true
    }
}


const actions = {
    /** Đặt tên method trùng vs action 
     * action add => add method
     * vì có tính chất `reference` nhận luôn `todos` k cần trả về 1 `state` mới
    */

   add({ todos }, title) { 
        console.log('this: ', title)
        if(title){ // nếu có `title` mới thực hiện logic => tránh mỗi nút `enter`
            // thêm vào `todos`
            todos.push({ title, completed: false })
            // lưu vào storage
            storage.set(todos)
        }
   },
   toggle({ todos }, index){
        const todo = todos[index] // lấy ra `todo` theo `index`
        console.log('todo: ', todo)
        todo.completed = !todo.completed; //đảo ngược lại value
        storage.set(todos)
   },
   toggleAll({ todos }, completed){
        // completed: trạng thái check của checkbox bên ngoài truyền vào
        todos.forEach(todo => todo.completed = completed); //set lại trạng thái cho tất cả `todos`
        storage.set(todos);
   },
}

export default function reducer(state = init, action, args){
    /* // case 1: using switch-case
    switch(action){
        case 'add':
            const [title] = args // nhận `title` trong `args`
            return {
                ...state,
                todos: [...state.todos,{
                    title, // thêm title
                    completed: false // jobs mới thì mặc định là fasle
                }]
            }
            break;
        default:
            return state
    }
    */

    // case 2: lấy ra ngoài và thực hiện logic => tên action = action method
    actions[action] && actions[action](state, ...args)
    return state

    /** actions[action] && actions[action](state, ...args)
     * nếu mà `actions` có `action` thì chạy hàm đó
     * truyền `state` & `...args`
    */
}




















