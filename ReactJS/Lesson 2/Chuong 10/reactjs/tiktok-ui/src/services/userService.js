import * as httpRequest from '~/utils/httpRequest'; //lấy hết các export lẻ (get, port, push...)

// fetchApi
export const getSuggested = async (page, perPage) => {
    // Chuyển đổi từ Promise -> Async/Await
    // Await luôn ở trước Promise

    try {
        // nhận res
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
getSuggested();
