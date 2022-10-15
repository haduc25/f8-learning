import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'

// Init state
export const initState = {
    job: '',
    jobs: []
}

// Tạo ra 'Reducer'
const reducer = (state, action) => {
    console.log('Action: ', action)
    console.log('Prev state: ', state)
    
    // tạo ra newState / mục đích có thể console.log ra đc newState
    let newState

    switch(action.type){
        case SET_JOB:
            newState = {
                // update: job '' => cần bảo lưu state bên cạnh
                ...state, //bảo lưu state
                job: action.payload // set lại job
            }
            break

        case ADD_JOB:
            newState = {
                ...state, //bảo lưu state cũ
                // Sửa lại array cũ
                jobs: [...state.jobs, action.payload] //bảo lưu array cũ & thêm job mới
            }
            break

        case DELETE_JOB:
            const newJobs = [...state.jobs] //tránh sửa mảng cũ => lưu vào mảng mới

            // xóa theo index
            newJobs.splice(action.payload, 1) //action.payload vì action.payload = index / 1 là xóa 1 phần tử

            newState = {
                ...state, //bảo lưu state cũ
                // set lại jobs = array mới
                jobs: newJobs
            }
            break
            
        default:
                throw new Error('Invalid action.')
    
    }
    
    console.log('New state: ', newState)

    return newState
}


export default reducer;