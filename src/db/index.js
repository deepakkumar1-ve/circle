const mongoose = require('mongoose');

mongoose.connect(
  `mongodb+srv://Deepak:${process.env.MONGO_DB_PASSWORD}@cluster0-n91xu.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
