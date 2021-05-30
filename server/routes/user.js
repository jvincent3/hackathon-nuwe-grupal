const express = require('express');
const router = express.Router();

const {
    loginUser,
    signinUser,
    createUser,
    getOneUser,
    getAllUsers,
    updateUser,
    deleteUser
} = require('../controllers/user.controller');

const { encrypt } = require('../middleware/encryptPassword');
const { authToken } = require('../middleware/verifyToken');

// Ruta para login
router.post('/login', encrypt, loginUser);

// Ruta para sign in
router.post('/signin', encrypt, signinUser);

// Ruta para crear un usuario
router.post('/', encrypt, createUser);

// Ruta para obtener todos los usuarios
router.get('/', authToken, getAllUsers);

// Ruta para obtener un usuario en base a su ID
router.get('/:userId', authToken, getOneUser);

// Ruta para actualizar los datos del usuario
router.put('/', authToken, encrypt, updateUser);

// Ruta para eliminar a un usuario
router.delete('/', authToken, deleteUser);

module.exports = router;