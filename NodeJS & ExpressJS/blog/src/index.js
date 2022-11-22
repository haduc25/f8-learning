const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined')); //type combined / Predefined Formats

// Template engine
app.engine('handlebars', handlebars.engine()); //set template engine
app.set('view engine', 'handlebars'); //set view
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
    res.render('news');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
