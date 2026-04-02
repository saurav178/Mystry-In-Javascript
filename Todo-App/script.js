// const input = document.getElementById("todo-input");
// const addBtn = document.getElementById("add-btn");
// const todoList = document.getElementById("todo-list");

// let todos = []

// function render(){}


// 1. Get Elements
const input    = document.getElementById("todo-input");
const addBtn   = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// 2. Todos Array
let todos = [];

// 3. Show Todos
function render() {
  todoList.innerHTML = "";

  todos.forEach((todo, i) => {
    todoList.innerHTML += `
      <li>
        <span>${todo}</span>
        <button onclick="deleteTodo(${i})">🗑</button>
      </li>
    `;
  });
}

// 4. Add Todo
function addTodo() {
  if (input.value.trim() === "") return;
  todos.push(input.value.trim());
  input.value = "";
  render();
}

// 5. Delete Todo
function deleteTodo(i) {
  todos.splice(i, 1);
  render();
}

// 6. Button Click & Enter Key
addBtn.addEventListener("click", addTodo);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});
