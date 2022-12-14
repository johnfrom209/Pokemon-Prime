const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_CONNECT || 'mongodb://127.0.0.1:27017/pokemon-prime-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
