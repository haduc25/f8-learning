const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, default: '', maxLength: 255, required: true },
        description: { type: String, min: 18, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        videoId: { type: String, maxlength: 255, required: true },
        level: { type: String, maxlength: 255 },

        // truyền qua obj 2 => k cần trường này
        // createAt: { type: Date, default: Date.now },
        // updateAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    },
);

// Accessing a Model
module.exports = mongoose.model('Course', Course); //mongo sẽ read & tự convert ra collection 'course'
