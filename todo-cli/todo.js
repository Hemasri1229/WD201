const fs = require("fs");
const path = require("path");

const todoFile = path.join(__dirname, "todos.json");
const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

function loadTodos() {
  try {
    return JSON.parse(fs.readFileSync(todoFile, "utf-8"));
  } catch {
    return [];
  }
}

function saveTodos(todos) {
  fs.writeFileSync(todoFile, JSON.stringify(todos, null, 2));
}

function add(title, dueDate) {
  const todos = loadTodos();
  todos.push({ title, dueDate, completed: false });
  saveTodos(todos);
}

function markAsComplete(index) {
  const todos = loadTodos();
  if (todos[index]) {
    todos[index].completed = true;
    saveTodos(todos);
  }
}

function formattedTodo(todo) {
  const checkbox = todo.completed ? "[x]" : "[ ]";
  return `${checkbox} ${todo.title}${todo.dueDate !== today ? " " + todo.dueDate : ""}`;
}

function displayTodos() {
  const todos = loadTodos();

  const overdue = todos.filter(t => t.dueDate < today);
  const dueToday = todos.filter(t => t.dueDate === today);
  const dueLater = todos.filter(t => t.dueDate > today);

  console.log("My Todo-list\n");

  console.log("Overdue");
  overdue.forEach(t => console.log(formattedTodo(t)));
  console.log("\nDue Today");
  dueToday.forEach(t => console.log(formattedTodo(t)));
  console.log("\nDue Later");
  dueLater.forEach(t => console.log(formattedTodo(t)));
}

// Command line interface
const args = process.argv.slice(2);
if (args[0] === "add") {
  add(args[1], args[2]);
} else if (args[0] === "markAsComplete") {
  markAsComplete(parseInt(args[1]));
} else if (args[0] === "list") {
  displayTodos();
}

