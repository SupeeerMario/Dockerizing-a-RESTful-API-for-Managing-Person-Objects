const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PersonSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
    },
    age: {
        type: Number,
    },

    gender: {
        type: String,
    
    },
    email: {
        type: String,
    }
});

PersonSchema.plugin(uniqueValidator, { message: 'Id already in use.' });
module.exports = mongoose.model('persons', PersonSchema);