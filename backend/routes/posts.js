const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.post('', (req, res, next) => {
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

router.get('', (req, res, next) => {
  Post.find().then(documents => {
    res
      .status(200)
      .json({ message: 'posts returned successfully', posts: documents });
  });
});

router.put('/:id', (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({ _id: req.params.id }, post).then(result => {
    res.status(200).json({ message: 'posts updated' });
  });
});

router.delete('/:id', (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    res.status(200).json({ message: 'posts deleted' });
  });
});

module.exports = router;
