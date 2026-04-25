const mongoose = require('mongoose');

const noticiaSchema = new mongoose.Schema(
	{
		titulo: {
			type: String,
			required: true,
			trim: true
		},
		categoria: {
			type: String,
			required: true,
			trim: true
		},
		autor: {
			type: String,
			required: true,
			trim: true
		},
		conteudo: {
			type: String,
			required: true,
			trim: true
		},
		destaque: {
			type: Boolean,
			default: false
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Noticia', noticiaSchema);
