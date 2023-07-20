const express = require('express');

const router = express.Router();

router.get('/', () => console.log('more middleware here soon'))

module.exports = router;