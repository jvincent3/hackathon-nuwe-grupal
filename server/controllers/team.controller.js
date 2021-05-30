require('dotenv').config();
// const { decrypt } = require('../helpers/crypto');
const jwt = require('jsonwebtoken');
const Team = require('../models/team.model');
// const Repository = require('../models/repository.model');
const { errorHandler } = require('../helpers/dbErrorHandler');


/**
 * Recibe información de un equipo y lo registra en la base de datos
 * @param {Object} req 
 * @param {Object} res 
 */
exports.createTeam = async (req, res) => {

    let team = new Team(req.body);

    await team.save((err, team) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err),
            });
        }

        res.status(200).json({ message: 'Equipo creado correctamente' });
    });
}


/**
 * Devuelve una lista completa de todos los equipos
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getAllTeam = async (req, res) => {

    await Team.find({}, '-password').exec((err, team) => {
        if (err) {
            return res.status(400).json({
                error: 'Algo no va bien...',
            });
        }

        if (team.length == 0) {
            res.json({ message: 'Ningún equipo encontrado' })
        } else {
            res.json(team);
        }
    });
}

/**
 * Obtiene la información del equipo y la actualiza al encontrar al equipo mediante su ID
 * @param {Object} req 
 * @param {Object} res 
 */
exports.updateTeam = async (req, res) => {
  
    // Encuentra el equipo con el ID proporcionado y lo actualiza
    await Team.findOneAndUpdate(
        { _id: req.params.teamname },
        { $set: req.body },
        { new: true, select: '-password' },
        (err, team) => {
            if (err || !team) {
                return res.status(400).json({
                    error: "No se ha podido actualizar el equipo",
                });
            }

            // Devuelve el equipo encontrado y editado
            res.json(team);
        })

}

/**
 * Encuentra a un equipo en base a su ID y lo elimina de la base de datos,
 * junto a los repasitorios asociados al mismo
 * @param {Object} req 
 * @param {Object} res 
 */
exports.deleteTeam = async (req, res) => {
    // Encuentra al equipo por id y lo elimina, al mismo tiempo que lo da como respuesta
    await Team.findByIdAndDelete({ _id: req.params.teamname }, async (err, team) => {
        if (err || !team) {
            return res.status(400).json({
                error: "No se ha podido eliminar al equipo",
            });
        };

        // devuelve el equipo que ha sido eliminado
        res.json({ message: `${team} equipos han sido eliminados` });

    });

};

/**
 * Recibe información de un equipo y lo registra en la base de datos
 * @param {Object} req 
 * @param {Object} res 
 */
exports.createMember = async (req, res) => {
    console.log(req.body)

   
};

/**
 * Recibe información de un equipo y lo registra en la base de datos
 * @param {Object} req 
 * @param {Object} res 
 */
exports.deleteMember = async (req, res) => {

    let team = new Team(req.body);

    await team.save((err, team) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err),
            });
        }

        res.status(200).json({ message: 'Miembro eliminado correctamente' });
    });
}
