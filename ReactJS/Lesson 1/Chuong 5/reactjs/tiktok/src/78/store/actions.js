import { SET_TODO_INPUT, ADD_TODO } from './constants'

// function / nhận payload & return obj
// set
export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload
})

// add
export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
})

