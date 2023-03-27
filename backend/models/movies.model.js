const mongoose = require('mongoose');

const { Schema } = mongoose;

const MovieSchema = new Schema({
  name: String,
  genre: String,
  year: Number,
}, {timestamps : true});

module.exports = mongoose.model('Movie', MovieSchema);
