const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public'))); //cho phép truy cập file tĩnh / public
// console.log('PATH IMAGE: ', path.join(__dirname, 'public/img'));

// Middleware xử lý data từ form
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //handle khi submit = js / gửi từ code js

// 1 Số library có thể gửi dl lên server: XMLHttpRequest, fetch, axios...

// HTTP logger
app.use(morgan('combined')); //type combined / Predefined Formats

// Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' })); //set template engine / đổi đuôi file .handlebars -> .hbs
app.set('view engine', 'hbs'); //set view
app.set('views', path.join(__dirname, 'resources/views'));

// console.log('PATH: ', __dirname); //PATH:  D:\Coding\F8_Learning\NodeJS & ExpressJS\blog\src
// console.log('PATH: ', path.join(__dirname, 'resources/views')); //PATH:  D:\Coding\F8_Learning\NodeJS & ExpressJS\blog\src\resources\views

// Routes init / truyền 'app' qua route
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
