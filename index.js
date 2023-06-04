const path = require('path');
const express = require('express');


const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

app.get('/datenschutz', (request, response) => {
	return response.sendFile('datenschutz.html', { root: '.' });
});

app.get('/impressum', (request, response) => {
	return response.sendFile('impressum.html', { root: '.' });
});

app.get('/sudoku', (request, response) => {
	return response.sendFile('sudoku.html', { root: '.' });
});

app.get('/solver', (request, response) => {
	return response.sendFile('solver.html', { root: '.' });
});

app.get('/creator/ai', (request, response) => {
	return response.sendFile('ai-creator.html', { root: '.' });
});

app.get('/creator/self', (request, response) => {
	return response.sendFile('self-creator.html', { root: '.' });
});

app.get('/kreuzwortraetsel', (request, response) => {
	return response.sendFile('kreuzwortraetsel.html', { root: '.' });
});

app.listen(3000);
console.log("http://localhost:3000")