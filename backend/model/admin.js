const mongoose = require('mongoose')
const { Schema, model } = mongoose

const AdminSchema = new Schema({
    name: String,
    email: String,
    password: String,
    isActive: Boolean,
    isAdmin: Boolean,
}, {
    timestamps: true
})

const AdminModel = model('Admin', AdminSchema)
module.exports = AdminModel