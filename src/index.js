const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET   : Buscar  uma informação do back-end
 * POST  : Criar   uma informação no back-end
 * PUT   : Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parametros:
 * Query Params: Parametros nomeados enviados na rota após ? (Filtros, paginação)
 *               ex: http://localhost:3333/users?page=2&nome=Diego
 * Route Params: Parametros utilizados para identificar recursos
 *               ex: app.get('/users/:id', (request, response) => { ... 
 *                   http://localhost:3333/users/1
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 *               ex: app.use(express.json());   // app.post('/users', (request, response) => { ...
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
*/
   
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() 
*/



app.listen(3333);