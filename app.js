const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const jogadorRoutes = require('./routes/jogadorRoutes');
const partidaRoutes = require('./routes/partidaRoutes');
const noticiaRoutes = require('./routes/noticiaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.json({
		mensagem: 'API do Sport Club Internacional funcionando',
		rotas: ['/api/jogadores', '/api/partidas', '/api/noticias']
	});
});

app.use('/api/jogadores', jogadorRoutes);
app.use('/api/partidas', partidaRoutes);
app.use('/api/noticias', noticiaRoutes);

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
