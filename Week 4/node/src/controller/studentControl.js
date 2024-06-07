const { Student } = require('../model/student');

let createStudent = async function(req, res) {
    try {
        let data = req.body;
        let result = await Student.create(data);
        res.send({data : result});
    } catch (error) {
        res.status(500).json({error: error.message });
    }
};

const getAllStudents = async (req, res) => {
    try {
        let students = await Student.find();
        res.send({mag : "Student Details", students});
    }
    catch (error) {
        res.status(500).send({msg : "Error fetching students", error: error.message});
    }
}

module.exports = {createStudent, getAllStudents}
