const express = require('express');
const router = express.Router();

const likeController = require('../controllers/likeController');

router.get('/likes', likeController.findAll);
router.get('/likes/:id', likeController.findById);
router.post('/likes', likeController.create);
router.put('/likes/:id', likeController.update);
router.delete('/likes/:id', likeController.destroy);

module.exports = router;