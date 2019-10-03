const express = require("express");
const parser = require("body-parser");
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

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  const name = req.body.name;

  todos = [...todos, {
    id: todos.length + 1,
    name: name
  }];

  res.send(todos);
});

app.listen(port, host, () => {
  console.log(`Listening to ${host}:${port}`);
});
