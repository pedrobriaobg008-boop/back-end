const Jogador = require('../models/Jogador');

const criarJogador = async (req, res) => {
    try {
        const jogador = await Jogador.create(req.body);
        res.status(201).json(jogador);
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao criar jogador', erro: error.message });
    }
};

const listarJogadores = async (req, res) => {
    try {
        const jogadores = await Jogador.find().sort({ nome: 1 });
        res.json(jogadores);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao listar jogadores', erro: error.message });
    }
};

const buscarJogadorPorId = async (req, res) => {
    try {
        const jogador = await Jogador.findById(req.params.id);

        if (!jogador) {
            return res.status(404).json({ mensagem: 'Jogador nao encontrado' });
        }

        res.json(jogador);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar jogador', erro: error.message });
    }
};

const atualizarJogador = async (req, res) => {
    try {
        const jogador = await Jogador.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!jogador) {
            return res.status(404).json({ mensagem: 'Jogador nao encontrado' });
        }

        res.json(jogador);
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao atualizar jogador', erro: error.message });
    }
};

const deletarJogador = async (req, res) => {
    try {
        const jogador = await Jogador.findByIdAndDelete(req.params.id);

        if (!jogador) {
            return res.status(404).json({ mensagem: 'Jogador nao encontrado' });
        }

        res.json({ mensagem: 'Jogador removido com sucesso' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao remover jogador', erro: error.message });
    }
};

module.exports = {
    criarJogador,
    listarJogadores,
    buscarJogadorPorId,
    atualizarJogador,
    deletarJogador
};
