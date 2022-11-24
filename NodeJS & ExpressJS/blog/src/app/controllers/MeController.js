const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        // Count Docs
        Course.countDocumentsDeleted()
            .then((deletedCount) => {
                console.log(deletedCount);
            })
            .catch(() => {});

        // res.send('Meow meow');

        // Tạm thời lấy hết course từ db ra
        Course.find({})
            .then((courses) => res.render('me/stored-courses', { courses: mutipleMongooseToObject(courses) }))
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        //findDeleted: will return only DELETED documents
        Course.findDeleted({}) //lấy ra những course đã bị xóa
            .then((courses) => res.render('me/trash-courses', { courses: mutipleMongooseToObject(courses) }))
            .catch(next);
    }
}

module.exports = new MeController();
