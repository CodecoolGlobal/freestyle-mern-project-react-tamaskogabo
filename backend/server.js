const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const { MONGO_URL, PORT } = process.env;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
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
