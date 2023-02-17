const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', ReactFormDataSchema);
module.exports = User;