const express = require('express');
const route = require('.');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

/** Middleware for routes - create routes
// Ví dụ: thêm middleware vào 'router.get('/create', courseController.create);'
router.get(
    '/create',
    function (req, res, next) {
        // Chỉ áp dụng trên tuyến đường này
        // http://localhost:3000/courses/create?ticket=vip%20ticket | /courses/create?ticket=vip ticket
        if (req.query.ticket === 'vip ticket') return next();
        res.status(403).json({ message: 'Access denied' });
    },
    courseController.create,
);
*/

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormActions); //matches | phải định nghĩa lên trên các params là id tránh bị matches
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy); //delete real
router.get('/:slug', courseController.show); //có thể custom, config '/:slug' => '/:id', '/:name'...

module.exports = router;
