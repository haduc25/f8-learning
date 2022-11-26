const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        let courseQuery = Course.find({});

        // // Example - k dùng middleware
        // if (req.query.hasOwnProperty('_sort')) {
        //     // hasOwnProperty(): Kiểm tra '_sort' có tồn tại trong 'req.query' hay không?
        //     // res.json({ message: 'Successfully!' });
        //     // return;
        //     /*
        //         ================> hardcode <================
        //     */
        //     // courseQuery = courseQuery.sort({
        //     //     name: 'asc',
        //     //     /** Query.prototype.sort()
        //     //      * Sets the sort order
        //     //      * If an object is passed, values allowed are asc, desc, ascending, descending, 1, and -1.
        //     //      * If a string is passed, it must be a space delimited list of path names. The sort order of each path is ascending unless the path name is prefixed with - which will be treated as descending.
        //     //      * Link: https://mongoosejs.com/docs/api/query.html#query_Query-sort
        //     //      */
        //     // });
        //     /*
        //         ================> query - parameter - column, type | req.query.column, req.query.type <================
        //     */
        //     // res.json(req.query); //{"_sort":"","column":"name","type":"desc"}
        //     // return;
        //     courseQuery = courseQuery.sort({
        //         [req.query.column]: req.query.type,
        //     });
        // }

        // res.json(res.locals._sort);

        // Gom vào dùng Promise.all
        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount, //truyền qua view/me/stored
                    courses: mutipleMongooseToObject(courses),
                }),
            ) //destructuring
            .catch(next);

        /** Đã gom code trong Promise.all
            // Count Docs
            Course.countDocumentsDeleted()
                .then((deletedCount) => {
                    console.log(deletedCount);
                })
                .catch(() => {});

            // res.send('Meow meow');

            // Tạm thời lấy hết course từ db ra
            Course.find({})
                .then((courses) =>
                    res.render('me/stored-courses', { courses: mutipleMongooseToObject(courses) }),
                )
                .catch(next);
        */
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        //findDeleted: will return only DELETED documents
        Course.findDeleted({}) //lấy ra những course đã bị xóa
            .then((courses) =>
                res.render('me/trash-courses', { courses: mutipleMongooseToObject(courses) }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
