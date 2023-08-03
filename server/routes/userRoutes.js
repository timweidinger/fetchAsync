const express = require('express');
const router = express.Router();

const devsController = require('../controllers/devsController');

router.get('/');
router.post('/user/name', (req, res, next) => {
  res.status(201).json({devs: res.locals.devs});
});
router.delete('/friend', (req, res, next) => {
  res.status(201).json({devs: res.locals.devs});
});
router.patch('/password', (req, res, next) => {
  res.status(201).json({devs: res.locals.devs});
});

module.exports = router;
