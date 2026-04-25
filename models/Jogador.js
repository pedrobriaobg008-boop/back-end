const mongoose = require('mongoose');

const jogadorSchema = new mongoose.Schema(
	{
		nome: {
			type: String,
			required: true,
			trim: true
		},
		numeroCamisa: {
			type: Number,
			required: true,
			unique: true,
			min: 1,
			max: 99
		},
		posicao: {
			type: String,
			required: true,
			trim: true
		},
		nacionalidade: {
			type: String,
			required: true,
			trim: true
		},
		idade: {
			type: Number,
			required: true,
			min: 15,
			max: 45
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Jogador', jogadorSchema);
