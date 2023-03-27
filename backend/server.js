const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const MovieModel = require('./models/movies.model');

const { MONGO_URL, PORT } = process.env;
app.use(express.json());

app.get('/api/movies', async (req, res) => {
  const movies = await MovieModel.find({});
  return res.json(movies);
});

app.post('/api/movies', async (req, res, next) => {
  const movie = req.body;

  try {
    const saved = await MovieModel.create(movie);
    res.status(201);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

const main = async () => {
  await mongoose.connect(MONGO_URL);

  app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
    console.log(`http://127.0.0.1:${PORT}`);
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
