const mongoose = require('mongoose');

const WorkshopSchema = mongoose.Schema({
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
    },
    location: {
        type: String,
        require: true
    }

});

module.exports = mongoose.model('Workshop_Registered_Students', WorkshopSchema);