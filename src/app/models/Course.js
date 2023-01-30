const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');

mongoose.set('strictQuery', false);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        // _id: { type: mongoose.SchemaTypes.ObjectId, required: true, indexed: true, },
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
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
});

module.exports = mongoose.model('Course', Course);
