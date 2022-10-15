import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'

// setJob
export const setJob = payload => {
    return {
        type: SET_JOB,
        payload //payload = payload truyền vào 
    }
}

// addJob
export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

// deleteJob
export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}