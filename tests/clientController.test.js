const request = require('supertest');
const mongoose = require('mongoose');
const { app } = require('../index');
const Client = require('../models/clientModel');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/vortexvinyl', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('Testes para o controlador de clientes', () => {
  let clientId;

  jest.setTimeout(30000);

  test('Deve criar um novo cliente', async () => {
    jest.setTimeout(15000);

    const response = await request(app)
      .post('/clientes')
      .send({ nome: 'Teste', endereco: 'Rua Teste, 123', generosMusicais: ['Rock', 'Samba'] });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('nome', 'Teste');
    clientId = response.body._id;
  });

  test('Deve obter informações de todos os clientes', async () => {
    jest.setTimeout(10000);

    const response = await request(app).get('/clientes');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
  });

  test('Deve atualizar um cliente existente', async () => {
    jest.setTimeout(15000);

    const response = await request(app)
      .put(`/clientes/${clientId}`)
      .send({ nome: 'Teste Atualizado' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('nome', 'Teste Atualizado');
  });

  test('Deve excluir um cliente', async () => {
    jest.setTimeout(10000);

    const response = await request(app).delete(`/clientes/${clientId}`);

    expect(response.statusCode).toBe(204);
  });
});
