const express = require('express');
const route = require('.');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.get('/:slug', courseController.show); //có thể custom, config '/:slug' => '/:id', '/:name'...

module.exports = router;
