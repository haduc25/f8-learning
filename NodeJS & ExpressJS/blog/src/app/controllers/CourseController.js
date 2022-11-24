const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        // Bên file 'courses.js' đặt params là gì thì ở đây nhận vào như thế / ở đây đang truyền là ':/slug'
        // req.params.slug;
        // res.send('Course Detail => ' + encodeURIComponent(req.params.slug)); //encodeURIComponent(): mã hóa cái cho đỡ lỗi

        //use findOne()
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                // render
                // res.json(course);
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        // res.send('Course created');
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        // res.send('Created Course ^^');
        res.json(req.body);
        // res.render('courses/store');
    }
}

module.exports = new CourseController();
