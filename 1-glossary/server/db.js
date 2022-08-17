const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary');

// 2. Set up any schema and models needed by the app
const glossarySchema = new mongoose.Schema({
  word: String,
  definition: String
});

const Glossary = mongoose.model('Glossary', glossarySchema);


let save = (wordsAndDef, callback) => {
  Glossary.insertMany(wordsAndDef)
  .then(() => {
    console.log('save fn is working');
    callback(null);
  })
  .catch((error) => {
    console.log('save fn is not functioning')
    callback(error);
  })
}

// 3. Export the models
module.exports.save = save;

// 4. Import the models into any modules that need them
