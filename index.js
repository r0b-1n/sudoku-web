const path = require('path');
const express = require('express');
const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

app.get('/datenschutz', (request, response) => {
	return response.sendFile('/public/datenschutz.html', { root: '.' });
});

app.get('/impressum', (request, response) => {
	return response.sendFile('/public/impressum.html', { root: '.' });
});

app.get('/play', (request, response) => {
	return response.sendFile('/sudoku/sudoku.html', { root: '.' });
});

app.get('/rooms', (request, response) => {
	return response.sendFile('/multiplayer/sudoku-versus.html', { root: '.' });
});

app.get('/game', (request, response) => {
	return response.sendFile('/multiplayer/sudoku.html', { root: '.' });
});

app.listen(6969);