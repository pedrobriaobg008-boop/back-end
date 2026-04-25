const express = require('express');
const {
	criarPartida,
	listarPartidas,
	buscarPartidaPorId,
	atualizarPartida,
	deletarPartida
} = require('../controllers/partidaController');

const router = express.Router();

router.post('/', criarPartida);
router.get('/', listarPartidas);
router.get('/:id', buscarPartidaPorId);
router.put('/:id', atualizarPartida);
router.delete('/:id', deletarPartida);

module.exports = router;
