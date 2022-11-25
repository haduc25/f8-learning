const express = require('express');
const route = require('.');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

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
