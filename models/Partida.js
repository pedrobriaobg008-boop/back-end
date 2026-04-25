const mongoose = require('mongoose');

const partidaSchema = new mongoose.Schema(
	{
		adversario: {
			type: String,
			required: true,
			trim: true
		},
		estadio: {
			type: String,
			required: true,
			trim: true
		},
		dataPartida: {
			type: Date,
			required: true
		},
		golsInter: {
			type: Number,
			required: true,
			min: 0
		},
		golsAdversario: {
			type: Number,
			required: true,
			min: 0
		},
		totalGols: {
			type: Number,
			default: 0
		},
		melhorJogador: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Jogador',
			required: true
		}
	},
	{
		timestamps: true
	}
);

partidaSchema.pre('save', function (next) {
	this.totalGols = this.golsInter + this.golsAdversario;
	next();
});

module.exports = mongoose.model('Partida', partidaSchema);
