# VortexVinylAPI
Aplicação que oferece uma API para gerenciar clientes de uma loja fictícia de discos de vinil raros e exclusivos. A API permite a realização das operações básicas CRUD para manipular informações sobre os clientes.
### Dependências

O projeto utiliza as seguintes dependências:

- **Express:** Framework para construção de aplicativos web com Node.js.
- **Mongoose:** Biblioteca para modelagem de objetos MongoDB.
- **Body-parser:** Middleware para processar corpos de requisição HTTP.
- **Jest:** Framework de teste para JavaScript.
- **Supertest:** Biblioteca para testar APIs HTTP.



### Estrutura do Projeto (MVC)

O projeto segue a arquitetura Modelo-Visão-Controlador (MVC) e é composto pelos seguintes arquivos:

- **`index.js`:** Ponto de entrada da aplicação. Configura um servidor Express, estabelece conexão com um banco de dados MongoDB, define um middleware para processar JSON e configura rotas relacionadas aos clientes.

- **`controllers/clientController.js`:** Controlador para manipulação de clientes. Define funções para operações CRUD no contexto de uma aplicação web Node.js e MongoDB usando o Mongoose.

- **`models/clientModel.js`:** Modelo que representa documentos no MongoDB com um esquema específico. Ajuda a definir a estrutura dos dados e simplifica a interação com o banco de dados MongoDB usando o Mongoose.

- **`routes/clientRoutes.js`:** Encapsula a lógica de roteamento relacionada aos clientes. Define como o aplicativo responde a solicitações do cliente em caminhos e métodos HTTP específicos.

- **`tests/clientController.test.js`:** Arquivo de testes utilizando o framework Jest e a biblioteca supertest. Testa operações CRUD do controlador de clientes na aplicação web.

### Descrição das Respostas da API

Quando uma solicitação é feita para a API, a resposta retorna um código de status HTTP que indica o resultado da operação. Abaixo estão as possíveis respostas da API e suas significâncias:

#### Códigos de Status Comuns:

- **200 OK:** Indica que a solicitação foi bem-sucedida. O corpo da resposta contém os dados solicitados.

- **201 Created:** Indica que a solicitação de criação foi bem-sucedida. O corpo da resposta geralmente contém os dados do novo recurso criado.

- **204 No Content:** Indica que a solicitação foi bem-sucedida, mas não há conteúdo para retornar. Usado comumente para operações de atualização e exclusão.

- **400 Bad Request:** Indica que a solicitação do cliente é inválida ou malformada. O corpo da resposta pode conter informações adicionais sobre o erro.

- **404 Not Found:** Indica que o recurso solicitado não foi encontrado. Pode ocorrer em operações de leitura ou exclusão.

- **500 Internal Server Error:** Indica um erro interno no servidor. O corpo da resposta pode conter informações adicionais sobre o erro.

#### Formato das Respostas:

- **Operações Bem-Sucedidas (200, 201, 204):** O corpo da resposta pode conter dados relevantes à operação realizada.

- **Erro de Solicitação (400):** O corpo da resposta geralmente contém detalhes sobre o erro, como mensagens de validação ou informações sobre campos inválidos.

- **Recurso Não Encontrado (404):** O corpo da resposta pode conter informações indicando que o recurso solicitado não foi localizado.

- **Erro Interno do Servidor (500):** O corpo da resposta geralmente contém informações sobre o erro interno no servidor.
