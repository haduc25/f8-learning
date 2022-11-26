const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        _id: { type: Number },
        name: { type: String, default: '', maxLength: 255, required: true },
        description: { type: String, min: 18, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        videoId: { type: String, maxlength: 255, required: true },
        level: { type: String, maxlength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        // unique: true; tự add short_id -> nếu trùng slug

        // truyền qua obj 2 => k cần trường này
        // createAt: { type: Date, default: Date.now },
        // updateAt: { type: Date, default: Date.now },
    },
    {
        _id: false, // tắt auto add id của mongoose
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug);

CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

// Accessing a Model
module.exports = mongoose.model('Course', CourseSchema); //mongo sẽ read & tự convert ra collection 'course'
