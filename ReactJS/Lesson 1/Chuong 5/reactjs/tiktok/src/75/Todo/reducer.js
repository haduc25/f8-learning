import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'

// Init state
export const initState = {
    job: '',
    jobs: []
}

// Tạo ra 'Reducer'
const reducer = (state, action) => {
    switch(action.type){
        case SET_JOB:
            return {
                // update: job '' => cần bảo lưu state bên cạnh
                ...state, //bảo lưu state
                job: action.payload // set lại job
            }

        case ADD_JOB:
            return {
                ...state, //bảo lưu state cũ
                // Sửa lại array cũ
                jobs: [...state.jobs, action.payload] //bảo lưu array cũ & thêm job mới
            }

        case DELETE_JOB:
            const newJobs = [...state.jobs] //tránh sửa mảng cũ => lưu vào mảng mới

            // xóa theo index
            newJobs.splice(action.payload, 1) //action.payload vì action.payload = index / 1 là xóa 1 phần tử

            return {
                ...state, //bảo lưu state cũ
                // set lại jobs = array mới
                jobs: newJobs
            }
            
        default:
                throw new Error('Invalid action.')
    
    }
}


export default reducer;