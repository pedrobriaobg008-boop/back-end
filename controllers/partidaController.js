const Partida = require('../models/Partida');
const Jogador = require('../models/Jogador');

const criarPartida = async (req, res) => {
	try {
		const jogador = await Jogador.findById(req.body.melhorJogador);

		if (!jogador) {
			return res.status(400).json({ mensagem: 'Melhor jogador informado nao existe' });
		}

		const partida = await Partida.create(req.body);
		const partidaPopulada = await Partida.findById(partida._id).populate('melhorJogador', 'nome numeroCamisa posicao');
		
		res.status(201).json(partidaPopulada);
	} catch (error) {
		res.status(400).json({ mensagem: 'Erro ao criar partida', erro: error.message });
	}
};

const listarPartidas = async (req, res) => {
	try {
		const partidas = await Partida.find()
			.populate('melhorJogador', 'nome numeroCamisa posicao')
			.sort({ dataPartida: -1 });

		res.json(partidas);
	} catch (error) {
		res.status(500).json({ mensagem: 'Erro ao listar partidas', erro: error.message });
	}
};

const buscarPartidaPorId = async (req, res) => {
	try {
		const partida = await Partida.findById(req.params.id).populate('melhorJogador', 'nome numeroCamisa posicao');

		if (!partida) {
			return res.status(404).json({ mensagem: 'Partida nao encontrada' });
		}

		res.json(partida);
	} catch (error) {
		res.status(500).json({ mensagem: 'Erro ao buscar partida', erro: error.message });
	}
};

const atualizarPartida = async (req, res) => {
	try {
		if (req.body.melhorJogador) {
			const jogador = await Jogador.findById(req.body.melhorJogador);
			if (!jogador) {
				return res.status(400).json({ mensagem: 'Melhor jogador informado nao existe' });
			}
		}

		const partida = await Partida.findById(req.params.id);

		if (!partida) {
			return res.status(404).json({ mensagem: 'Partida nao encontrada' });
		}

		if (req.body.adversario !== undefined) partida.adversario = req.body.adversario;
		if (req.body.estadio !== undefined) partida.estadio = req.body.estadio;
		if (req.body.dataPartida !== undefined) partida.dataPartida = req.body.dataPartida;
		if (req.body.golsInter !== undefined) partida.golsInter = req.body.golsInter;
		if (req.body.golsAdversario !== undefined) partida.golsAdversario = req.body.golsAdversario;
		if (req.body.melhorJogador !== undefined) partida.melhorJogador = req.body.melhorJogador;

		await partida.save();
		
		const partidaAtualizada = await Partida.findById(partida._id).populate('melhorJogador', 'nome numeroCamisa posicao');

		res.json(partidaAtualizada);
	} catch (error) {
		res.status(400).json({ mensagem: 'Erro ao atualizar partida', erro: error.message });
	}
};

const deletarPartida = async (req, res) => {
	try {
		const partida = await Partida.findByIdAndDelete(req.params.id);

		if (!partida) {
			return res.status(404).json({ mensagem: 'Partida nao encontrada' });
		}

		res.json({ mensagem: 'Partida removida com sucesso' });
	} catch (error) {
		res.status(500).json({ mensagem: 'Erro ao remover partida', erro: error.message });
	}
};

module.exports = {
	criarPartida,
	listarPartidas,
	buscarPartidaPorId,
	atualizarPartida,
	deletarPartida
};
