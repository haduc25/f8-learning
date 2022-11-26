const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');
const SortMiddleware = require('./app/middlewares/SortMiddleware');

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public'))); //cho phép truy cập file tĩnh / public | middleware: đánh chặn request để xem có phải là file tĩnh hay không | nếu là file tĩnh: điều hướng sang folder 'public'
// console.log('PATH IMAGE: ', path.join(__dirname, 'public/img'));

// Middleware xử lý data từ form
app.use(express.urlencoded({ extended: true })); //middleware: cấu trúc lại dữ liệu và lưu vào object tên là 'body'
app.use(express.json()); //handle khi submit = js / gửi từ code js

// console.log(typeof express.json()); //function

app.use(methodOverride('_method')); // để Override lại POST cho server nhận vào là PUT |  //middleware: lắng nghe xem có '_method' hay không | nếu có => override & điều hướng lại cho đúng routers

// Custom middlewares
app.use(SortMiddleware);

// 1 Số library có thể gửi dl lên server: XMLHttpRequest, fetch, axios...

/** Middleware for routes - middleware routes
// Example: Middleware | Không bị ảnh hưởng đến các routes khác
app.get(
    '/middleware',
    function (req, res, next) {
        // Bác bảo vệ 1
        // Soát vé
        if (
            ['child ticket', 'adult ticket', 'golden ticket', 'vip ticket'].includes(
                req.query.ticket,
            )
        ) {
            // Chỉnh sửa trước khi cho vào 'passed'
            req.face = 'Face edited when passed to middleware 1.';

            // Khi có vé => bác bảo vệ 1 cần gọi hàm next để cho phép 'passed' => qua bác bảo vệ 2 (middleware 2)
            // Nếu k next() thì app() sẽ bị treo
            // Có vé thì nó sẽ trông ntn: http://localhost:3000/middleware?ticket=golden%20ticket | middleware?ticket=golden ticket
            return next();
        }

        // Khi không có vé => đuổi về nhà
        res.status(403).json({ message: 'Access denied' });
    },
    function (req, res, next) {
        // Bác bảo vệ 2

        res.json({
            message: 'Succesfully!',
            // vì ở middleware 1 đã chỉnh sửa => ở đây có thể call đến 'face'
            face: req.face,
        });
    },
);
*/

/** Middleware for all routes, app() - Áp dụng trên toàn bộ tuyến đường, app()
app.use(bacBaoVe); // app.use(): bao hàm tất cả các request (get, post...) | cả app() đều đi qua bacBaoVe() => cần ticket
// app.use('/test', bacBaoVe); // tất cả các phương thức (get, post...) đều đi qua url '/test' => vào bacBaoVe() => cần ticket

// Middleware áp dụng cho toàn bộ tuyến đường
function bacBaoVe(req, res, next) {
    if (
        ['child ticket', 'adult ticket', 'golden ticket', 'vip ticket'].includes(req.query.ticket)
    ) {
        req.face = 'Face edited when passed to middleware 1.';
        return next();
    }
    res.status(403).json({ message: 'Access denied' });
}
*/

// HTTP logger
app.use(morgan('combined')); //type combined / Predefined Formats

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sorttable: (field, sort) => {
                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                };

                const types = {
                    default: 'desc',
                    asc: 'desc', //nếu đang là 'asc' => khi click chuyển qua 'desc'
                    desc: 'asc', //nếu đang là 'desc' => khi click chuyển qua 'asc'
                };

                const icon = icons[sort.type];
                const type = types[sort.type];

                return `<a href='?_sort&column=${field}&type=${type}'>
                    <span class="${icon}"></span>
                </a>`;
            },
        },
    }),
); //set template engine / đổi đuôi file .handlebars -> .hbs
app.set('view engine', 'hbs'); //set view
app.set('views', path.join(__dirname, 'resources', 'views'));

// console.log('PATH: ', __dirname); //PATH:  D:\Coding\F8_Learning\NodeJS & ExpressJS\blog\src
// console.log('PATH: ', path.join(__dirname, 'resources/views')); //PATH:  D:\Coding\F8_Learning\NodeJS & ExpressJS\blog\src\resources\views

// Some page: Hone, search, contact

// Routes init / truyền 'app' qua route
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
