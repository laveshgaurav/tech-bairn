const mongoose = require('mongoose');

const TrainingSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    course: {
        type: String,
        require: true
    }

});

module.exports = mongoose.model('Registered_Students', TrainingSchema);