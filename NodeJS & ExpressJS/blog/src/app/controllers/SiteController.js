const Course = require('../models/Course');

class SiteController {
    // [GET] / | Home
    index(req, res, next) {
        // // Callback
        // Course.find({}, (err, courses) => {
        //     if (!err) {
        //         res.json(courses); //nếu k có lỗi return 'courses' cho client
        //         return;
        //     }
        //     // có lỗi
        //     res.status(400).json({ error: 'message' });
        //     next(err);
        // });

        // Promise
        Course.find({})
            // .then((courses) => res.json(courses))
            // .then((courses) =>
            //     res.render('home', {
            //         favCrush: 'LA. BMH',
            //         courses: courses,
            //     }),
            // )

            .then((courses) => {
                courses = courses.map((course) => course.toObject()); //Chuyển từ (Object mongo -> Object Literals) dùng 'toObject()'
                res.render('home', { courses });
            })
            // .catch((error) => next(error)); //có thể shorten lại
            .catch(next); //shorten

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
