const bcrypt = require('bcrypt');

exports.encrypt = (req, res, next) => {
    let { password } = req.body;

    if (password) {
        // Se encripta la contraseña para ser almacenada en la base de datos
        const salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(password, salt);
    }    

    next();
}