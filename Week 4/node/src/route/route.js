const express = require('express');
const router = express.Router();
const { createStudent, getAllStudents } = require('../controller/studentControl');

router.get('/', (req, res) => {
    res.send('Router Method!');
});

router.post('/student', createStudent);
router.get('/student', getAllStudents);

module.exports = router;
