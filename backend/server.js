const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const MovieModel = require("./models/movies.model");

const { MONGO_URL, PORT } = process.env;
app.use(express.json());

app.get("/api/movies", async (req, res) => {
  try {
    const movies = await MovieModel.find({});
    return res.json(movies);
  }
  catch (error) {
    res.send(error);
  }
});

app.post("/api/movies", async (req, res, next) => {
  const movie = req.body;
  try {
    const saved = await MovieModel.create(movie);
    res.status(201);
    res.json(saved);
  } 
  catch (err) {
    return next(err);
  }
});

app.patch('/api/movies/:id', async (req, res, next) => {
  try {
    const idOfDocumentToUpdate = req.params.id;
    const updateFromBody = req.body;
    const saved = await MovieModel.findByIdAndUpdate(idOfDocumentToUpdate, updateFromBody);

    res.json(saved);
  }
  catch (error) {
    return next(error);
  }
});

app.delete('/api/movies/:id', async (req, res) => {
  try {
    const movieIdFromClient = req.params.id;
    const deleteData = await MovieModel.findByIdAndDelete(movieIdFromClient);
    res.send(deleteData);
  }
  catch (error) {
    res.send(error);
  }
})

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
