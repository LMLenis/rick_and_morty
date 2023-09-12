// Para configurar un servidor EXPRESS
const express = require('express');
const server = express();
const morgan = require('morgan')

//Configura el puerto que queremos ocupar
const PORT = 3001;

const router = require('./routes/index')


server.use(express.json());
server.use(morgan("dev"));

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use('/rickandmorty', router);

server.listen(PORT, () => {
   console.log('Server raised on port: ' + PORT);
});

