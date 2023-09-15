
const { server } = require('./app');

//Configura el puerto que queremos ocupar
const PORT = 3001;


server.listen(PORT, () => {
   console.log('Server raised on port: ' + PORT);
});

