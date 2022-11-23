const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

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
                res.render('courses/show');
            })
            .catch(next);
    }
}

module.exports = new CourseController();
