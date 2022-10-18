import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, UPDATE_TODO_INPUT } from './constants'

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

// delete
export const delTodo = (payload) => ({
    type: DELETE_TODO,
    payload
})

// update
export const updateTodoInput = (payload, index) => ({
    type: UPDATE_TODO_INPUT,
    payload,
    index
})

