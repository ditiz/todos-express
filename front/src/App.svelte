<script>
  import { onMount } from "svelte";
  import Todo from "./Todo.svelte";
  import Form from "./Form.svelte";

  import { todos } from "./store/todos";

  onMount(async () => {
    const response = await fetch("http://localhost:3000/todos");
    todos.set(await response.json());
  });
</script>

<style>
  h1 {
    color: #b5ffe9;
  }
</style>

<h1>Todos</h1>

<ul>
  {#each $todos as todo}
    <Todo {todo} />
  {/each}
</ul>

<Form />
