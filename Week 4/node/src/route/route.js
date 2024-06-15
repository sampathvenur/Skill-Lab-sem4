const express = require('express');
const router = express.Router();
const { createStudent, getAllStudents } = require('../controller/studentControl');
const { createFeedback } = require('../controller/feedbackControl');
const {authorization} = require('../middleware/middleware')
router.get('/', (req, res) => {
    res.send('Router Method!');
});

// student route
router.post('/student', createStudent);
router.get('/student', getAllStudents);

//feedback route
router.post('/feedback', createFeedback)

module.exports = router;
