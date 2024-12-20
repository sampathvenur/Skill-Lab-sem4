const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
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
    message: {
        type: String
    },
})
const msg = mongoose.model('feedback', feedbackSchema);

module.exports = { msg };
