const init = {
    todos: [
        {
            title: 'Learn Javascript',
            completed: false,
        },
        {
            title: 'Learn PHP, Python',
            completed: true,
        },
        {
            title: 'Learn ReactJS',
            completed: true,
        },
    ]
}


export default function reducer(state = init, action, args){
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
}