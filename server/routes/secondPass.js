const express = require('express');
const router = express.Router();

const { getSecondPassword } = require('../controllers/secondPass.controller');

router.get('/:username', getSecondPassword);

module.exports = router;