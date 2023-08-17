const mongoose = require('mongoose')
const { Schema, model } = mongoose

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    isActive: Boolean,
    phone: Number,
    task: String,
    address: String,
    timein: String,
    timeout: String,

}, {
    timestamps: true
})

const UserModel = model('User', UserSchema)
module.exports = UserModel