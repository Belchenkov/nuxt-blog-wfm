const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

// Routes
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const commentRoutes = require('./routes/comment.routes');

const passportStrategy = require('./middleware/passport-strategy');
const keys = require('./keys');
const app = express();

// Connect To Mongo
mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected ...');
  })
  .catch(e => console.error(e));

// Passport Init
app.use(passport.initialize());
passport.use(passportStrategy);

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

module.exports = app;
