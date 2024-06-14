const express = require('express');
const {msg} = require('../model/feedback');

// Function to create feedback
let createFeedback = async function(req, res) {
    try {
        let data = req.body;
        let result = await msg.create(data);
        res.send({ data: result });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Function to get feedback
const getFeedback = async (req, res) => {
    try {
        let messages = await Feedback.find();
        res.send({ msg: "Student Feedback Details", data: messages });
    } catch (error) {
        res.status(500).send({ msg: "Error fetching feedback", error: error.message });
    }
};

module.exports = { createFeedback, getFeedback };
