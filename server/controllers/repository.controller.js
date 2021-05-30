const Repository = require('../models/repository.model');
const User = require('../models/user.model');

/**
 * Crea un repositorio en la base de datos e incrementa en 1 el número 
 * de repositorios del usuario.
 * @param {Object} req 
 * @param {Object} res 
 */
exports.createRepo = async (req, res) => {

    req.body.stack = JSON.parse(req.body.stack);
    req.body.author = req.user._id;

    // Se crea el objeto del repositorio siguiendo el model establecido
    let repo = new Repository(req.body);

    // Se guarda el objeto en la base de datos
    await repo.save(async (err, repo) => {
        if (err) {
            return res.status(400).json({
              error: 'Something went wrong',
            });
        }

        // Se busca al usuario por su ID y se incrementa el número de repositorios en 1
        await User.findByIdAndUpdate(
            {_id: req.user._id}, 
            {$inc: { repos: 1 }}).exec((err, user) => {
                if (err || !user) {
                    return res.status(400).json({
                      error: "Couldn't update user",
                    });
                }

                res.json(repo);
        });
    });
}

/**
 * Obtiene un repositorio a partir de su ID
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getOneRepo = async (req, res) => {
    let {repoId} = req.params;

    await Repository.findById(repoId).exec((err, repo) => {
        if (err || !repo) {
            return res.status(400).json({
              error: 'Repository Not Found',
            });
        }

        res.json(repo);
    })
}

/**
 * Obtiene todos los repositorios relacionados a un mismo ID de usuario
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getReposFromUser = async (req, res) => {

    await Repository.find({author: req.user._id}).exec((err, repos) => {
        if (err) {
            return res.status(400).json({
              error: 'Something went wrong',
            });
        }

        if (repos.length == 0) {
            res.json({message: 'No repositories were found for this user'})
        } else {
            res.json(repos);
        }
    })
}

/**
 * Obtiene todos los repositorios registrados en la base de datos
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getAllRepos = async (req, res) => {
    await Repository.find().exec((err, repos) => {
        if (err) {
            return res.status(400).json({
              error: 'Something went wrong',
            });
        }

        if (repos.length == 0) {
            res.json({message: 'No repositories were found'})
        } else {
            res.json(repos);
        }
    })
}

/**
 * Encuentra el repositorio por su ID y lo actualiza
 * @param {Object} req 
 * @param {Object} res 
 */
exports.updateRepo = async (req, res) => {
    let {repoId} = req.params;

    await Repository.findByIdAndUpdate({_id: repoId}, {$set: req.body}, {new: true}, (err, repo) => {
        if (err || !repo) {
            return res.status(400).json({
              error: "Repository couldn't be updated",
            });
        }

        res.json(repo);
    });
}

/**
 * Elimina el repositorio de la base de datos y disminuye el número de repos del usuario
 * que le corresponde
 * @param {Object} req 
 * @param {Object} res 
 */
exports.deleteRepo = async (req, res) => {
    let {repoId} = req.params;

    // Encuentra y elimina el repositorio por su ID
    await Repository.findByIdAndDelete({_id: repoId}, async (err, repo) => {
        if (err || !repo) {
            return res.status(400).json({
              error: "Repository couldn't be deleted",
            });
        }

        // Encuentra al usuario por el id de referencia presente en el repositorio eliminado
        // y disminuye en 1 el número de sus repositorios
        await User.findByIdAndUpdate(
            {_id: repo.author}, 
            {$inc: { repos: -1 }}).exec((err, user) => {
                if (err || !user) {
                    return res.status(400).json({
                      error: "Couldn't update user",
                    });
                }

                res.json({message: 'Repository succesfully deleted', repo});
        });

    })
}