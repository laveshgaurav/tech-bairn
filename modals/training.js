const mongoose = require('mongoose');

const TrainingSchema = mongoose.Schema({
    course_name: {
        type: String,
        require: true
    },
    course_details: {
        type: String,
        require: true
    },
    duration: {
        type: String,
        require: true
    },
    outcome: {
        type: String,
        require: true
    },
    fee: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Training', TrainingSchema);