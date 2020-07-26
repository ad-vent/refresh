const Recipe = require('../database/recipes.js');

const getAllEntries = (req, res) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  Recipe.find({}).sort({ 'recipe.date': -1 })
    .exec((err, data) => {
      if (err) res.sendStatus(400);
      res.send(data.slice(startIndex, endIndex));
    });
};

const getUserInfo = (req, res) => {
  const user = req.param.username
  Recipe.find({ username: user })
    .exec((err, data) => {
      if (err) res.sendStatus(400);
      res.send(data);
    });
};

const getUserLikes = (req, res) => {
  const user = req.param.username;
  const query = [
    {
      $match: {
        username: user
      }
    },
    {
      $group: {
        total_likes: { $sum: '$recipes.likes' }
      }
    }
  ]
};

module.exports = {
  getAllEntries,
  getUserInfo,
  getUserLikes
};
