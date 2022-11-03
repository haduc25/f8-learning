import * as httpRequest from '~/utils/httpRequest'; //lấy hết các export lẻ (get, port, push...)

// fetchApi
export const search = async (q, type = 'less') => {
    // Chuyển đổi từ Promise -> Async/Await
    // Await luôn ở trước Promise

    try {
        // nhận res
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
search();
