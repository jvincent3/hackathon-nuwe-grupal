const express = require('express');
const router = express.Router();

const {
    createTeam,
    getAllTeam,
    updateTeam,
    deleteTeam,
    createMember,
    deleteMember
} = require('../controllers/team.controller');

const { authToken } = require('../middleware/verifyToken');

// Ruta para crear equipo
router.post('/teamname',  createTeam);

// Ruta para obtener un equipo
router.get('/:teamname',  getAllTeam);

// Ruta para actualizar equipo
router.put('/:teamname',  updateTeam);

// Ruta para eliminar equipo
router.delete('/:teamname',  deleteTeam);

// Ruta para crear miembro equipo
router.post('/:teamid/membercreate', createMember);

// Ruta para eliminar miembro equipo
router.delete('/:teamid/memberdelete', deleteMember);

module.exports = router;
 