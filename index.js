const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

//ip de acesso
const ipify = require('ipify2');
ipify
  .ipv4()
  .then((ipv4) => console.log(ipv4))
  .catch((err) => console.log(err));
ipify
  .ipv6()
  .then((ipv6) => console.log(ipv6))
  .catch((err) => console.log(err));

//endereço da aplicação
const absolutepath = __dirname + '/views/index.html';
console.log(absolutepath + ' endereço');

// mudando o endereço visível da aplicação
app.use(express.static(__dirname + '/public'));

// landing page da aplicação
app.get('/', function (req, res) {
  res.sendFile(absolutepath);
});

// api para enviar json

app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    resp = 'Hello Json'.toUpperCase();
  } else {
    resp = 'Hello Json';
  }
  res.json({
    message: resp,
  });
});

app.listen(process.env.PORT || 3000);
