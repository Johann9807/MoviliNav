const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

server.use(middlewares);

// Configuracion de CORS
server.use(cors());

// rutas JSON Server
server.use('/api', router);

// Inicia el servidor
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});