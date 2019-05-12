const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes
const authRoutes = require('./routes/auth.routes');

const keys = require('./keys');
const app = express();

// Connect To Mongo
mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected ...');
  })
  .catch(e => console.error(e));

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

module.exports = app;
