const express = require('express');
const clientController = require('../controllers/clientController');

const router = express.Router();

router.post('/', clientController.createClient);
router.put('/:id', clientController.updateClient);
router.get('/', clientController.getAllClients);
router.delete('/:id', clientController.deleteClient);

module.exports = router;

