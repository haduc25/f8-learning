const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); //cho phép truy cập file tĩnh / public
// console.log('PATH IMAGE: ', path.join(__dirname, 'public/img'));

// HTTP logger
app.use(morgan('combined')); //type combined / Predefined Formats

// Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' })); //set template engine / đổi đuôi file .handlebars -> .hbs
app.set('view engine', 'hbs'); //set view
app.set('views', path.join(__dirname, 'resources/views'));

// console.log('PATH: ', __dirname); //PATH:  D:\Coding\F8_Learning\NodeJS & ExpressJS\blog\src
// console.log('PATH: ', path.join(__dirname, 'resources/views')); //PATH:  D:\Coding\F8_Learning\NodeJS & ExpressJS\blog\src\resources\views

app.get('/', (req, res) => {
    // res.send(`
    //   <h2>Hello World! - haduc25</h2>
    // `);

    res.render('home');
});

app.get('/news', (req, res) => {
    console.log(req.query);
    res.render('news');
});

// app.post('/news', (req, res) => {
//     res.render('news');
// });

app.get('/search', (req, res) => {
    // console.log('res/query: ', req.query); //RES => QUERY:  { q: 'haduc25', ref: 'haduc2509' }
    console.log('res/query/q: ', req.query.q); //haduc25
    console.log('res/query/q: ', req.query.ref); //haduc2509

    res.render('search');
});

// app.post('/search', (req, res) => {
//     res.render('search');
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
