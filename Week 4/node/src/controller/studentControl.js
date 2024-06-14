const express = require('express')
const { Student } = require('../model/student');
const jwt = require('jsonwebtoken')
const jwt_secret = "TCE"

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

// TOKEN
const login = async (req, res) =>{
    try {
        let data = req.body
        let {email , USN} = data;

        if(!email || USN) {
            res.status(404).send({msg : "Student not found!"})
        }
        let checkStudent = await Student.findOne({USN : USN})
        if(!checkStudent) {res.status(404)
            .send({msg : "Student is not Registered"})}
            const token = jwt.sign({USN : USN} , jwt_secret , {expiresIn : '1h'}
            )
            return res.status(201).send({msg : "Token generated successfully",
                token : token})
        }
        catch (error) {
            console.log(error);
            res.status(500).send({
                status: false,
                message: error.message,
            });
        }
    }
module.exports = {createStudent, getAllStudents, login}
