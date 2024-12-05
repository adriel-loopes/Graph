// server.js (ou outro arquivo de servidor)
const express = require('express');
const path = require('path');
const app = express();

// Define a porta onde o servidor vai rodar
const port = 3000;

// Serve o arquivo HTML
app.use(express.static(path.join(__dirname, 'public')));

// Caso queira renderizar diretamente o index.html em uma rota
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
