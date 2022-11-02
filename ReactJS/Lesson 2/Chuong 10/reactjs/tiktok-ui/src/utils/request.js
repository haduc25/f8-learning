import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// custom get dùng (async, await) ES6 / Promise
export const get = async (path, options = {}) => {
    // Khi goji hafm nafy return 1 promise
    // viết code k cần .then()
    // xử lý tuần tự

    const response = await request.get(path, options); //wait (chờ đợi) request.get()
    // response nhận ddc dl từ API
    // response.data làm ntn thì ở ngoài khi gọi đến k cần res.data.data => res.data
    return response.data;
};

export default request;
