const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    join: {
        type: String,
    }
})

module.exports = mongoose.model('users', userSchema)