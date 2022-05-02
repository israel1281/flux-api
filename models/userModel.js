const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {type: String, default: ''},
    gender: {type: String, default: 'male'},
    referrer: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    referring: [{type: mongoose.Types.ObjectId, ref: 'user'}],
}, {
    timestamps: true
})


module.exports = mongoose.model('user', userSchema)
