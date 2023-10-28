const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();
const MovieModel = require('./models/movies.model');

const { MONGO_URL } = process.env;

const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'));

const populateMovies = async () => {
  await MovieModel.deleteMany({});

  const moviesToUpload = movies.movies.map((movie) => {
    return movie;
  });

  await MovieModel.create(...moviesToUpload);
};

const main = async () => {
  await mongoose.connect(MONGO_URL);

  await populateMovies();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
