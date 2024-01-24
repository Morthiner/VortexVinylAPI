const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    nome: String,
    endereco: String,
    generosMusicais: [String],
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;

