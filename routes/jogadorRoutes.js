const express = require('express');
const {
	criarJogador,
	listarJogadores,
	buscarJogadorPorId,
	atualizarJogador,
	deletarJogador
} = require('../controllers/jogadorController');

const router = express.Router();

router.post('/', criarJogador);
router.get('/', listarJogadores);
router.get('/:id', buscarJogadorPorId);
router.put('/:id', atualizarJogador);
router.delete('/:id', deletarJogador);

module.exports = router;
