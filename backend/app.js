const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 123901,
      title: 'first title',
      content: 'coming from server'
    },
    {
      id: 2342342,
      title: 'second title',
      content: 'coming from server'
    },
    {
      id: 234234123901,
      title: 'third title',
      content: 'coming from server'
    }
  ];
  res
    .status(200)
    .json({ message: 'posts returned successfully', posts: posts });
});
module.exports = app;