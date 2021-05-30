
const { encrypt } = require('../helpers/crypto');

exports.encrypt = (req, res, next) => {
    let { password } = req.body;

    if (password) {
        // Se encripta la contraseña para ser almacenada en la base de datos
        req.body.password = encrypt(password);
    }    

    next();
}