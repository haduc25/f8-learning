class NewsController {
    // [GET] / news
    index(req, res) {
        res.render('news');
    }

    // [GET] / news/:slug | news detail | :slug: là biến động ngẫu nhiên đứng sau url .../news/:slug
    show(req, res) {
        res.send('NEWS DETAIL ^^');
    }
}

module.exports = new NewsController();
