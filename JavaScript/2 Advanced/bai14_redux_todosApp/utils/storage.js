const TODOS_STORAGE_KEY = 'TODOS'

export default {
    // Object có tác dụng: đọc/ghi dữ liệu từ LocalStorage
    get(){
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [] // nếu k có mặc định là array ([])
    },
    set(todos){
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
    }
}