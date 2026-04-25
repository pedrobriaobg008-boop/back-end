const express = require('express');
const {
	criarNoticia,
	listarNoticias,
	buscarNoticiaPorId,
	atualizarNoticia,
	deletarNoticia
} = require('../controllers/noticiaController');

const router = express.Router();

router.post('/', criarNoticia);
router.get('/', listarNoticias);
router.get('/:id', buscarNoticiaPorId);
router.put('/:id', atualizarNoticia);
router.delete('/:id', deletarNoticia);

module.exports = router;
