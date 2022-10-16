

function logger(reducer) {
    // return reducer
    // return ra 1 hàm mới

    return (prevState, action) => { //state, action do useReducer return 

        // dùng  console.group(); nhóm lại theo 'action.type'
        console.group(action.type);

        // prev state
        console.log('Prev state: ', prevState);

        // action
        console.log('Action: ', action);

        // reducer() nhận state & action
        const newState = reducer(prevState, action)

        // next state
        console.log('Next state: ', newState);

        console.groupEnd();

        // return 
        return newState
    }



}

export default logger;