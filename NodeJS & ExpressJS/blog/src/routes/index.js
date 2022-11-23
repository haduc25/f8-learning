const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // app.get('/', (req, res) => {
    //     // res.send(`
    //     //   <h2>Hello World! - haduc25</h2>
    //     // `);

    //     res.render('home');
    // });

    // app.get('/news', (req, res) => {
    //     console.log(req.query);
    //     res.render('news');
    // });

    // app.post('/news', (req, res) => {
    //     res.render('news');
    // });

    // Thay thế cho '/news' trên
    app.use('/news', newsRouter);

    // Thay thế cho 'home & search' dưới
    app.use('/', siteRouter);

    // app.get('/search', (req, res) => {
    //     // console.log('res/query: ', req.query); //RES => QUERY:  { q: 'haduc25', ref: 'haduc2509' }
    //     console.log('res/query/q: ', req.query.q); //haduc25
    //     console.log('res/query/q: ', req.query.ref); //haduc2509

    //     res.render('search');
    // });

    // app.post('/search', (req, res) => {
    //     // Với POST thì nhận data qua 'req.body'
    //     console.log(req.body); //{ q: 'toiyeubanvclmabandeobienchanvcl', 'full-name': 'bmh <3', age: '18', gender: 'famale'}
    //     res.send('SEARCH ĐÃ NHẬN ĐC DATA / METHOD POST');
    // });
}

module.exports = route;
