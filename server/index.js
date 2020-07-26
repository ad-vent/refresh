const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const controller = require('./controller.js');

const PORT = 4444;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.get('/api/all', controller.getAllEntries);
app.get('/api/:username', controller.getUserInfo);
app.get('/api/:username/likes', controller.getUserLikes);

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`)
});