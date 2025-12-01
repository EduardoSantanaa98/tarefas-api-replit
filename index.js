const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

// Lista de tarefas
let tarefas = [];

// Configurar EJS
app.set("view engine", "ejs");

// Habilitar body-parser para receber POST
app.use(bodyParser.urlencoded({ extended: true }));

// Rota principal -> renderiza o formulário
app.get("/", (req, res) => {
  res.render("index", { tarefas });
});

// Rota para adicionar tarefa
app.post("/add", (req, res) => {
  const titulo = req.body.titulo;

  if (titulo) {
    tarefas.push(titulo);
  }

  res.redirect("/");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${port}`);
});
