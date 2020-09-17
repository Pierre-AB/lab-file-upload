const {
  Router
} = require('Express');
const router = new Router;
const Post = require('../models/post.model');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
  res.render('/post/post-form');
})

router.post('/', (req, res, next) => {
  
})