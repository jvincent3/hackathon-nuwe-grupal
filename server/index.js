const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');

const { connectDB } = require('./config/dbConnection');

// Establece la conexión con la base de datos;
connectDB();

// Establece el puerto de conexión
app.set('port', 5000);

// Configuración del servidor con express
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());


// Ruta principal de carga
app.get('/', (req, res) => {
    res.json({message: 'Welcome to the API REST of Github!'});
})

// Rutas para el crud de usuarios y repositorios
app.use('/api/user', require('./routes/user.js'));
app.use('/api/repository', require('./routes/repository.js'));

// Ruta para obtener la respuesta de la primera parte
app.use('/api/github', require('./routes/secondPass.js'));



app.use(express.static(path.join(__dirname, '/public')));

// Configuración para escuchar al puerto establecido previamente e iniciar la conexión con el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor conectado correctamente a http://localhost:${app.get('port')}`)
});


