const Noticia = require('../models/Noticia');

const criarNoticia = async (req, res) => {
    try {
        const noticia = await Noticia.create(req.body);

        res.status(201).json(noticia);
    } catch (error) {
		res.status(400).json({ mensagem: 'Erro ao criar noticia', erro: error.message });
    }
};

const listarNoticias = async (req, res) => {
    try {
        const noticias = await Noticia.find().sort({ createdAt: -1 });
        res.json(noticias);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao listar noticias', erro: error.message });
    }
};

const buscarNoticiaPorId = async (req, res) => {
    try {
        const noticia = await Noticia.findById(req.params.id);

        if (!noticia) {
            return res.status(404).json({ mensagem: 'Noticia nao encontrada' });
        }

        res.json(noticia);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar noticia', erro: error.message });
    }
};

const atualizarNoticia = async (req, res) => {
    try {
        const noticia = await Noticia.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!noticia) {
            return res.status(404).json({ mensagem: 'Noticia nao encontrada' });
        }

        res.json(noticia);
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao atualizar noticia', erro: error.message });
    }
};

const deletarNoticia = async (req, res) => {
    try {
        const noticia = await Noticia.findByIdAndDelete(req.params.id);

        if (!noticia) {
            return res.status(404).json({ mensagem: 'Noticia nao encontrada' });
        }

        res.json({ mensagem: 'Noticia removida com sucesso' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao remover noticia', erro: error.message });
    }
};

module.exports = {
    criarNoticia,
    listarNoticias,
    buscarNoticiaPorId,
    atualizarNoticia,
    deletarNoticia
};
