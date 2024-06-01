const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    USN: {
        type: String,
        unique: true
    },
    email: {
        type: String
    },
    mobile: {
        type: Number
    }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = { Student };
