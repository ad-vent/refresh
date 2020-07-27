const mongoose = require('mongoose');

const db = require('./index.js');

mongoose.Promise = global.Promise;

const recipesSchema = new mongoose.Schema(
  {
    recipe_id: Number,
    username: String,
    user_image: String,
    followers: Number,
    following: Number,
    recipe: {
      image: String,
      title: String,
      ingredients: [String],
      description: String,
      date: Date,
      likes: Number,
      comments: [
        {
          full_name: String,
          text: String
        }
      ]
    }
  }
);

const Recipe = mongoose.model('Recipes', recipesSchema);

module.exports = Recipe;
