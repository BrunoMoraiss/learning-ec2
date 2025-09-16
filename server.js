// Importando o express
const express = require("express");

// Criando a aplicação
const app = express();

// Porta padrão
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rota inicial
app.get("/", (req, res) => {
  res.send("🚀 API rodando com Express!");
});

// Exemplo de rota POST
app.post("/usuarios", (req, res) => {
  const usuario = req.body;
  res.status(201).json({ mensagem: "Usuário criado com sucesso!", usuario });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
