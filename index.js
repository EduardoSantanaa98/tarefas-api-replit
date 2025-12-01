const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

let tarefas = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { tarefas });
});

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
