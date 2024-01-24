

const Client = require('../models/clientModel');


exports.createClient = async (req, res) => {
    try{
        const newClient = await Client.create(req.body);
        res.status(201).json(newClient);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o cliente.' });

    }
};

exports.updateClient = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedClient = await Client.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedClient);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar cliente.' });

    }
};

exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter clientes' });

    }
};

exports.deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        await Client.findByIdAndDelete(id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir cliente. '});

    };

    
}