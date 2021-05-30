require('dotenv').config();
const { decrypt } = require('../helpers/crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const Repository = require('../models/repository.model');
const { errorHandler } = require('../helpers/dbErrorHandler');

/**
 * Recibe información de un usuario y lo registra en la base de datos
 * @param {Object} req 
 * @param {Object} res 
 */

exports.loginUser = async (req, res) => {

    const { username, password } = req.body;
    await User.find({ "username": username }, async (err, user) => {
     
        if (user.length === 0) {
            return res.status(400).json({
                error: (err),
            });
        }
        console.log(decrypt(user[0].password), password)


        if (decrypt(user[0].password) === decrypt(password)) {
            //generate a signed token with user id and secret
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

            // persist the token as 't' in cookie with expiry date
            res.cookie("github_token", token, { expire: new Date() + 9999 });

            res.json({ token, user });
        } else {
            return res.status(401).json({
                error: 'Nombre de Usuario o Contraseña incorrecto',
            });
        }
        if (err) {
            return res.status(400).json({
                error: errorHandler(err),
            });
        }

    });
}


/**
 * Recibe información de un usuario y lo registra en la base de datos
 * @param {Object} req 
 * @param {Object} res 
 */
exports.signinUser = async (req, res) => {

    let user = new User(req.body);

    await user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err),
            });
        }

        // Se oculta la contraseña
        user.password = undefined;

        //generate a signed token with user id and secret
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

        // persist the token as 't' in cookie with expiry date
        res.cookie("github_token", token, { expire: new Date() + 9999 });

        res.json({ token, user });
    });
}

/**
 * Obtiene al usuario de la base de datos a partir de su ID
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getOneUser = async (req, res) => {
    let { userId } = req.params;

    await User.findById(userId, '-password').exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found',
            });
        }

        res.json(user);
    })

}

/**
 * Devuelve una lista completa de todos los usuarios
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getAllUsers = async (req, res) => {

    await User.find({}, '-password').exec((err, users) => {
        if (err) {
            return res.status(400).json({
                error: 'Something went wrong',
            });
        }

        if (users.length == 0) {
            res.json({ message: 'No users were found here' })
        } else {
            res.json(users);
        }
    });
}

/**
 * Obtiene la información del formulario y la actualiza al encontrar al usuario mediante su ID
 * @param {Object} req 
 * @param {Object} res 
 */
exports.updateUser = async (req, res) => {
    // Encuentra el usuario con el ID proporcionado y lo actualiza
    await User.findOneAndUpdate(
        { _id: req.user._id },
        { $set: req.body },
        { new: true, select: '-password' },
        (err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    error: "User couldn't be updated",
                });
            }

            // Devuelve el usuario encontrado y editado
            res.json(user);
        })

}

/**
 * Encuentra a un usuario en base a su ID y lo elimina de la base de datos,
 * junto a los repasitorios asociados al mismo
 * @param {Object} req 
 * @param {Object} res 
 */
exports.deleteUser = async (req, res) => {
    // Encuentra al usuario por id y lo elimina, al mismo tiempo que lo da como respuesta
    await User.findByIdAndDelete({ _id: req.user._id }, async (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User couldn't be deleted",
            });
        }

        // Con el id del usuario, se buscan todos los repositorios que tengan el mismo
        // ID de autor y se eliminan
        await Repository.deleteMany({ author: user._id }, (err, repos) => {
            if (err) {
                return res.status(400).json({
                    error: "Repositories couldn't be deleted",
                });
            }

            console.log(repos);

            // Devuelve una contraseña vacia
            user.password = undefined;

            // limpia la cookie
            res.clearCookie("github_token");

            // devuelve el usuario que ha sido eliminado
            res.json({ message: `User and ${repos.deletedCount} Repositories succesfully deleted`, user });
        })


    })

};
