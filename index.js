const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();

const host = "localhost";
const port = 3000;

let todos = [
  {
    id: 1,
    name: "do an app"
  },
  {
    id: 2,
    name: "make the app good"
  }
];

app.use(express.static("public"));
app.use(express.json());

app.get("/todos", cors(), (req, res) => {
  res.json(todos);
});

app.post("/todos", cors(), (req, res) => {
  const name = req.body.name;

  console.log("name", req.body)

  todos = [
    ...todos,
    {
      id: todos.length + 1,
      name: name
    }
  ];

  res.json(req.body);
});

app.get("/todos/remove/:id", cors(), (req, res) => {
  todos = todos.filter(todo => todo.id != req.params.id);
  res.json(true);
});

app.listen(port, host, () => {
  console.log(`Listening to ${host}:${port}`);
});