const express = require('express');
const app = express();

const absolutePath = __dirname + '/views/index.html';

app.get('/', function (req, res) {
  res.sendFile(absolutePath);
});

app.listen(process.env.PORT || 3000);
