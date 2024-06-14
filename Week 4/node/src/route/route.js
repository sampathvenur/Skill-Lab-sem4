const express = require('express');
const router = express.Router();
const { createStudent, getAllStudents } = require('../controller/studentControl');
const { createFeedback } = require('../controller/feedbackControl');

router.get('/', (req, res) => {
    res.send('Router Method!');
});

// student
router.post('/student', createStudent);
router.get('/student', getAllStudents);

//feedback
router.post('/feedback', createFeedback)

module.exports = router;
