const express = require('express');
const router = express.Router();
const { createStudent } = require('../controller/studentControl');

router.get('/', (req, res) => {
    res.send('Router Method!');
});

router.post('/student', createStudent);

module.exports = router;
