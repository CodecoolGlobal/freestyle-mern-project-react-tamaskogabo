const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const MovieModel = require('./models/movies.model');
const UserModel = require('./models/user.model');
const cors = require('cors');
const CommentModel = require('./models/comments.model')

require('dotenv').config();
const { MONGO_URL, PORT } = process.env;

app.use(
  cors({
    origin: '*',
  }),
);

app.use(express.static('public'));

app.use(express.json());

app.post('/login', async (req, res) => {
  const exists = await UserModel.find({username: req.body.username});
  if (exists.length === 0) {
    res.status(404);
    return res.json();
  }
  bcrypt.compare(req.body.password, exists[0].password, (err, response) => {
    if (response === true) {
      res.status(200);
      return res.json({'approved': 'true'});
    }
    res.status(401);
    return res.json({'approved': 'false'});
  })
});

app.post('/register', async (req, res) => {
  const exists = await UserModel.find({username: req.body.username});
  if (exists.length > 0) {
    res.status(400);
    return res.json();
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const saved = await UserModel.create({
      username: req.body.username,
      password: hashedPassword,
    });
    res.status(201);
    res.json(saved);
  } catch (err) {
    return next(err);
  }
});

app.get('/api/movies', async (req, res) => {
  try {
    const movies = await MovieModel.find({}).sort({ title: 'asc' });
    return res.json(movies);
  } catch (error) {
    res.send(error);
  }
});

app.post('/api/movies', async (req, res, next) => {
  const movie = req.body;
  try {
    const saved = await MovieModel.create(movie);
    res.status(201);
    res.json(saved);
  } catch (err) {
    return next(err);
  }
});

app.patch('/api/movies/:id', async (req, res, next) => {
  try {
    const idOfDocumentToUpdate = req.params.id;
    const updateFromBody = req.body;
    const saved = await MovieModel.findByIdAndUpdate(
      idOfDocumentToUpdate,
      updateFromBody,
    );

    res.json(saved);
  } catch (error) {
    return next(error);
  }
});

app.delete('/api/movies/:id', async (req, res) => {
  try {
    const movieIdFromClient = req.params.id;
    const deleteData = await MovieModel.findByIdAndDelete(movieIdFromClient);
    res.send(deleteData);
  } catch (error) {
    res.send(error);
  }
});

app.post('/api/comment', async (req, res) => {
  const comment = req.body;
  const newComment = await CommentModel.create(comment);
  res.send(newComment);
});

app.get('/api/comment/:id', async (req, res) => {
  const id = req.params.id;
  const comments = await CommentModel.find({movie: id});
  res.json(comments);
});

const main = async () => {
  await mongoose.connect(MONGO_URL);
  

  app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
    console.log(`http://localhost:${PORT}`);
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
