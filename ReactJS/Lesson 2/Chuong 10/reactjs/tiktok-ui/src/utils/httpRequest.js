import axios from 'axios';

// test .env
console.log(process.env); //{NODE_ENV: 'development', PUBLIC_URL: '', WDS_SOCKET_HOST: undefined, WDS_SOCKET_PATH: undefined, WDS_SOCKET_PORT: undefined, …}
console.log(process.env.NODE_ENV); //development
console.log(process.env.REACT_APP_BASE_URL); //https://tiktok.fullstack.edu.vn/api/

const httpRequest = axios.create({
    // baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    // dung file env
    baseURL: process.env.REACT_APP_BASE_URL,
});

// custom get dùng (async, await) ES6 / Promise
export const get = async (path, options = {}) => {
    // Khi goji hafm nafy return 1 promise
    // viết code k cần .then()
    // xử lý tuần tự

    const response = await httpRequest.get(path, options); //wait (chờ đợi) httpRequest.get()
    // response nhận đc dl từ API
    // response.data làm ntn thì ở ngoài khi gọi đến k cần res.data.data => res.data
    return response.data;
};

export default httpRequest;
