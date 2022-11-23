const Course = require('../models/Course');

class SiteController {
    // [GET] / | Home
    index(req, res) {
        Course.find({}, (err, courses) => {
            if (!err) {
                res.json(courses); //nếu k có lỗi return 'courses' cho client
                return;
            }
            // có lỗi
            res.status(400).json({ error: 'message' });
        });

        // res.json({
        //     name: 'haduc25-yeucauvler',
        // });

        // res.send('hello');
        // res.render('home');
    }

    // [GET] /search | Search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
