const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
mongoose.set('strictQuery', false);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true, maxLength: 255 },
        description: { type: String },
        image: { type: String },
        level: { type: String },
        videoId: { type: String, required: true },
        slug: { type: String, slug: 'name', unique: true },
        // createAt: { type: Date, default: Date.now },
        // updateAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    },
    {
        _id: false,
    },
);

module.exports = mongoose.model('Course', Course);
