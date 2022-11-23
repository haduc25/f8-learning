const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '', maxLength: 255 },
    description: { type: String, min: 18, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, maxlength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

// Accessing a Model
module.exports = mongoose.model('Course', Course); //mongo sẽ read & tự convert ra collection 'course'
