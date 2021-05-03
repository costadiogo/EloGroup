/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

const connectionDb = 'mongodb://mongo:27017/users';

mongoose.connect(connectionDb, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connection established'))
  .catch((err) => console.log(err));

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
