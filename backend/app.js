const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const postRoutes = require('./routes/posts');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connect to the db
mongoose
  .connect(
    'mongodb+srv://kat:p0deqCXTFuFZT229@cluster0-fwu3z.mongodb.net/meanStackDB?retryWrites=true',
    { useNewUrlParser: true }
  )
  .then(console.log('connected to database'))
  .catch(err => console.log(err));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});
app.use('/api/posts', postRoutes);
module.exports = app;
