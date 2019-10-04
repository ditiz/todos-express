<script>
  import { todos } from "./store/todos";

  async function addTodo(e) {
    const name = e.target.new.value;

    //check if not empty
    if (name === "") {
      return false;
    }

    //Update local data
    todos.update(data => [...data, { id: data.length + 1, name: name }]);

    //Update distant data
    const response = await fetch(`http://localhost:3000/todos/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ name: name })
    });
    
    //Reset input
    e.target.new.value = "";
  }
</script>

<style>
  form {
    display: flex;
  }

  form input[type="text"] {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  form input[type="submit"] {
    border-radius: 0 0.25rem 0.25rem 0;
  }
</style>

<form on:submit|preventDefault={addTodo}>
  <input type="text" name="new" placeholder="New Todo" autocomplete="off" />
  <input type="submit" value="Add" />
</form>
