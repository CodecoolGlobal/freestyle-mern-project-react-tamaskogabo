const { Schema, model } = require('mongoose');

const commentsSchema = new Schema({
    name: String,
    comment: String,
    movie: Schema.Types.ObjectId
}, {timestamps: true});

module.exports = model('Comment', commentsSchema);