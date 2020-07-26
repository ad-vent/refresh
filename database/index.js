const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/mvp';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;
