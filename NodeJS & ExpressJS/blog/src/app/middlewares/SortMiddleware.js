module.exports = function SortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false, // disable sorting | mặc đinh là tắt sorting
        type: 'default',
    };
    // Link: https://expressjs.com/en/4x/api.html#res.locals

    if (req.query.hasOwnProperty('_sort')) {
        // Logic: Nếu có 'sort' => enabled = true | gán lại type & thêm column
        /** Có 2 cách để gán values vào Object trong phần này.
        // case 1:
        res.locals._sort.enabled = true;
        res.locals._sort.type = req.query.type; // gán bằng type trên url
        res.locals._sort.column = req.query.column; // gán bằng column trên url
        */

        // case 2: Hợp nhất Objects
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        });
    }
    next();
};
