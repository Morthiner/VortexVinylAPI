const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clientRoutes = require('./routes/clientRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost:27017/vortexvinyl', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
}

app.use('/clientes', clientRoutes);

const server = app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});

module.exports = { app, server };  
