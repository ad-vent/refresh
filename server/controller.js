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

const getUserEntries = (req, res) => {
  const user = req.params.username;
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const query = [
    { $match : { username : user } },
    { $sort : { 'recipe.date' : -1 } }
  ];

  Recipe.aggregate(query)
    .exec((err, data) => {
      if (err) res.sendStatus(400);
      res.send(data.slice(startIndex, endIndex));
    });
};

const getUserLikes = (req, res) => {
  const user = req.params.username;
  const query = [
    { $match : { username : user } },
    { $group : { _id: '$username', 'total_likes' : { $sum : '$recipe.likes' } } }
  ];

  Recipe.aggregate(query)
  .exec((err, data) => {
    if (err) res.sendStatus(400);
    res.send(data);
  });
};

const postData = (req, res) => {
  Recipe.create(req.body)
  .then((err, data) => {
    if (err) res.sendStatus(400);
    res.send(data, 'posted');
  });
}

module.exports = {
  getAllEntries,
  getUserEntries,
  getUserLikes,
  postData
};
