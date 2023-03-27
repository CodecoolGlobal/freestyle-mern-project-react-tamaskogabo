const mongoose = require('mongoose');

const { Schema } = mongoose;

const MovieSchema = new Schema(
  {
    title: String,
    genres: [String],
    year: Number,
    runtime: Number,
    release_date: String,
    writers: [String],
    actors: [String],
    storyline: String,
    directors: [String],
  },
  { timestamps: true },
);

module.exports = mongoose.model('Movie', MovieSchema);
