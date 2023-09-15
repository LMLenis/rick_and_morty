const express = require('express');
const server = express();
const morgan = require('morgan');
const router = require('./routes/index')

//Configura el puerto que queremos ocupar
const PORT = 3001;



//middlewears
server.use(express.json()); //traduce la información que viene en json
server.use(morgan("dev")); //no es obligatorio-console.log de los request de HTTP

//para permitir el acceso desde cualquier lado
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

module.exports = {server};