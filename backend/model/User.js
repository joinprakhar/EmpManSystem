const mongoose = require('mongoose')
const { Schema, model } = mongoose

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isActive: Boolean,
    phone: { type: String, required: true },
    task: String,
    address: { type: String, required: true },
    timein: String,
    timeout: String,


}, {
    timestamps: true
})

const UserModel = model('User', UserSchema)
module.exports = UserModel