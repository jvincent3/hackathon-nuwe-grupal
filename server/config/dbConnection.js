require('dotenv').config();
const mongoose = require('mongoose');

let connectionOptions = {
    useNewUrlParser: true,
	useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
};

// Stablish the connection with the database
exports.connectDB = async () => {
    const url = `mongodb://${process.env.HOST}:${process.env.PORT}/${process.env.DB}`;
    await mongoose.connect(url, connectionOptions, (err, connection) => {
        if (err) throw err;
        console.log('Conectado correctamente a la Base de datos');
    })
}