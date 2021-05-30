const express = require('express');
const router = express.Router();

// Importamos los métodos creados en el controlador
const {
    createRepo,
    getAllRepos,
    getReposFromUser,
    getOneRepo,
    updateRepo,
    deleteRepo
} = require('../controllers/repository.controller');
const { authToken } = require('../middleware/verifyToken');

// Ruta para crear un repositorio para un usuario
router.post('/', authToken, createRepo);

// Ruta para obtener todos los repositorios
router.get('/', getAllRepos);

// Ruta para obtener todos los repositorios de un usuario
router.get('/getRepoByUser', authToken, getReposFromUser);

// Ruta para obtener un repositorio
router.get('/getRepo/:repoId', authToken, getOneRepo);

// Ruta para actualizar un repositorio
router.put('/:repoId', authToken, updateRepo);

// Ruta para eliminar un repositorio
router.delete('/:repoId', authToken, deleteRepo);


module.exports = router;