const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/posts', postController.findAll);
router.get('/posts/:id', postController.findById);
router.post('/posts', postController.create);
router.put('/posts/:id', postController.update);
router.delete('/posts/:id', postController.destroy);

module.exports = router;