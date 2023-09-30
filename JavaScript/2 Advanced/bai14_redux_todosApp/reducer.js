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
        default:
            return state
    }
}