const TODOS_STORAGE_KEY = 'TODOS'

export default {
    get(){
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [] // nếu k có mặc định là array ([])
    },
    set(todos){
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
    }
}