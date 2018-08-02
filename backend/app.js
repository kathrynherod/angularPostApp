const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./models/post');
const mongoose = require('mongoose');

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
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: 'Post received successfully',
      postId: createdPost._id
    });
  });
});

app.get('/api/posts', (req, res, next) => {
  Post.find().then(documents => {
    res
      .status(200)
      .json({ message: 'posts returned successfully', posts: documents });
  });
});

app.delete('/api/posts/:id', (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(req.params);
    res.status(200).json({ message: 'posts deleted' });
  });
});
module.exports = app;
