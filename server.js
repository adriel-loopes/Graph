// server.js
const express = require('express');
const path = require('path');
const app = express();

// Defina a porta em que o servidor vai rodar
const port = 3000;

// Servir o arquivo HTML diretamente
app.use(express.static(path.join(__dirname, 'public')));

// Ou servir diretamente o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
