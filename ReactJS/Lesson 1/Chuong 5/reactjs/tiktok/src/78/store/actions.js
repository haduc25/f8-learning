import { SET_TODO_INPUT } from './constants'

// function / nhận payload & return obj
export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload
})