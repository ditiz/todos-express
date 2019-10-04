<script>
  import { todos } from "./store/todos";

  export let todo = {};

  async function removeTask(id) {
    //Update local data
    todos.update(data => data.filter(todo => todo.id != id));
    //Update distant data
    const response = await fetch(`http://localhost:3000/todos/remove/${id}`);
  }
</script>

<style>
  li {
    color: #c5e0d8;
    width: 15rem;
    display: flex;
    justify-content: space-between;
    list-style-type: disc;
    position: relative;
  }

  li::before {
    content: "";
    position: absolute;
    border: 0.2rem solid #c5e0d8;
    border-radius: 100%;
    left: -2rem;
    top: 30%;
  }

  li button {
    padding: 0 0.3rem 0.2rem 0.3rem;
    color: #c5e0d8;
    background: #2c2c2c;
    cursor: pointer;
  }
</style>

<li>
  {todo.name}
  <button on:click={() => removeTask(todo.id)}>x</button>
</li>
