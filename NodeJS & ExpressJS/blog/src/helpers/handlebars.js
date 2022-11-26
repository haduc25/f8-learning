const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sorttable: (field, sort) => {
        // Check field
        // Logic: Check 'field trên url' có phải là 'field đang ấn' vào hay không? | Nếu đúng => thay đổi icon của field đó
        const sortType = field === sort.column ? sort.type : 'default';
        /** // Logic giải thích
         * - field: field trên url
         * - sort.column: field đang nhấn vào
         * - Nếu đúng (true): dùng 'sort.type' | nếu đúng là 'asc' or 'desc' => thì lấy ra icon tương ứng
         * - Nếu không phải column đang nhấn: dùng icon 'default'
         *
         * => Nếu bấm đúng = lấy 'sort.type' để thay đổi icon / còn mấy cái k bấm vào thì sẽ dùng icon default
         */

        const icons = {
            default: 'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending',
        };

        const types = {
            default: 'asc', //mặc định khi nhấn lần đầu là sort theo 'asc' => 'A-Z' | có thể custom lại 'desc' => 'Z-A'
            asc: 'desc', //nếu đang là 'asc' => khi click chuyển qua 'desc'
            desc: 'asc', //nếu đang là 'desc' => khi click chuyển qua 'asc'
        };

        const icon = icons[sortType];
        const type = types[sortType];

        const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`); //protected href

        const ouput = `<a href='${href}'>
            <span class="${icon}"></span>
        </a>`;

        return new Handlebars.SafeString(ouput);

        // Docs: https://handlebarsjs.com/examples/helper-safestring.html
    },
};
