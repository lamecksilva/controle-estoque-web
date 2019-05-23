// Importando módulos
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Instanciando o construtor express
const app = express();

// Aplicando o middleware do body parser
app.use(bodyParser.json());

// Rota GET de teste
app.get('/', (req, res) => {
  res.send('Working');
});

// Conectando aplicação ao mongoDB
mongoose
  .connect('mongodb://db:27017/controle-estoque', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Porta do servidor
const PORT = process.env.PORT || 9000;

// "Ouvindo" o servidor na porta
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
