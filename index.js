const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");

const host = "localhost";
const port = 3000;
const dataFile = __dirname + "/src/data.json";
let todos = [];

fs.readFile(dataFile, (err, data) => {
  if (err) return false;
  todos = JSON.parse(data);
});

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

//Get todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

//Add todos
app.post("/todos", (req, res) => {
  const name = req.body.name;

  const newTodo = {
    id: todos.length + 1,
    name: name
  };

  const pouet = (todos = [...todos, newTodo]);

  fs.writeFile(dataFile, JSON.stringify(pouet), err => {
    if (err) return console.log;
    console.log(JSON.stringify(pouet, todos));
  });

  res.json(true);
});

//Remove todos
app.get("/todos/remove/:id", (req, res) => {
  todos = todos.filter(todo => todo.id != req.params.id);
  res.json(true);
});

app.listen(port, host, () => {
  console.log(`Listening to ${host}:${port}`);
});
