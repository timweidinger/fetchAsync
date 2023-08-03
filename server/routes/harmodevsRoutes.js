const express = require('express');
const router = express.Router();

const devsController = require('../controllers/devsController');

router.get('/');
router.get('/user');
router.patch('/user');
router.post('/name');
router.delete('/user');
router.post('/something', (req, res, next) => {
  res.status(201).json({devs: res.locals.devs});
});

module.exports = router;
