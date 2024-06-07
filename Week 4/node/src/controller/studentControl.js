const { Student } = require('../model/student');

let createStudent = async function(req, res) {
    try {
        let data = req.body;
        let result = await Student.create(data);
        res.json({ msg: "Student data created", data: result });
    } catch (error) {
        res.status(500).json({ msg: "Error creating student", error: error.message });
    }
};

module.exports = {createStudent};
