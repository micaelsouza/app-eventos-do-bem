var mongoose = require('mongoose');
mongoose.connect('mongodb://app:123456@ds035553.mongolab.com:35553/app-eventos-do-bem');

var questionsSchema = new mongoose.Schema({
  level: String,
  ref: String,
  question: String,
  alternatives: Array
});

var resultSchema = new mongoose.Schema({
  result: String,
  mission: String,
  personality: {
    name: String,
    image: String
  },
  description: String
});

module.exports = {
  Results: mongoose.model('results', resultSchema),
  Questions: mongoose.model('questions', questionsSchema)
};
