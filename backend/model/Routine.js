const mongoose = require('mongoose');
const { Schema, model } = mongoose

const RoutineSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    task: {
        type: String,
    },
    punchin: {
        type: String,
    },
    punchout: {
        type: String,
    },

}, {
    timestamps: true
});

const RoutineModel = model('Routine', RoutineSchema)

module.exports = RoutineModel;

