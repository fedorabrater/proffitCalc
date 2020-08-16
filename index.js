const express = require('express');
const app = express();

//endereço da aplicação
const absolutepath = __dirname + '/views/index.html';

// mudando o endereço visível da aplicação
app.use(express.static(__dirname + '/public'));

// landing page da aplicação
app.get('/', function (req, res) {
  res.sendFile(absolutepath);
});

// api para enviar json

app.get('/json', (req, res) => {
  res.json({
    message: 'Hello json',
  });
});

app.listen(process.env.PORT || 3000);
