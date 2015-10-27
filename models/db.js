var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/app-eventos-do-bem');

var categorySchema = new mongoose.Schema({
  firstAnsw: String,
  cc: String
});

var questionsSchema = new mongoose.Schema({
  level: String,
  cc: String,
  ref: String,
  question: String,
  alternatives: Array
});

var resultSchema = new mongoose.Schema({
  result: String,
  mission: String,
  personality: {
    name: String,
    image: String,
    bio: String
  }
});

module.exports = {
  Results: mongoose.model('results', resultSchema),
  Questions: mongoose.model('questions', questionsSchema)
  Category: mongoose.model('category', categorySchema)
};
