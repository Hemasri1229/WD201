const fs = require("fs");

const todoList = () => {
  const todos = [];

  const add = (title, dueDate) => {
    todos.push({ title, dueDate, completed: false });
  };

  const markAsComplete = (index) => {
    if (todos[index]) todos[index].completed = true;
  };

  const overdue = () => {
    const today = new Date().toISOString().split("T")[0];
    return todos.filter((todo) => todo.dueDate < today);
  };

  const dueToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return todos.filter((todo) => todo.dueDate === today);
  };

  const dueLater = () => {
    const today = new Date().toISOString().split("T")[0];
    return todos.filter((todo) => todo.dueDate > today);
  };

  const toDisplayableList = (list) => {
    const today = new Date().toISOString().split("T")[0];
    return list
      .map((todo) => {
        const checkbox = todo.completed ? "[x]" : "[ ]";
        const datePart = todo.dueDate === today ? "" : ` ${todo.dueDate}`;
        return `${checkbox} ${todo.title}${datePart}`;
      })
      .join("\n");
  };

  return {
    todos,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// MAIN
const todos = todoList();

// Add sample todos
const today = new Date().toISOString().split("T")[0];
const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0]; // -1 day
const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0]; // +1 day

todos.add("Submit assignment", yesterday);
todos.add("Pay rent", today);
todos.add("Service Vehicle", today);
todos.add("File taxes", tomorrow);
todos.add("Pay electric bill", tomorrow);

// Mark second item as complete
todos.markAsComplete(1);

// Print Output
console.log("My Todo-list\n");

console.log("Overdue");
console.log(todos.toDisplayableList(todos.overdue()));
console.log("\nDue Today");
console.log(todos.toDisplayableList(todos.dueToday()));
console.log("\nDue Later");
console.log(todos.toDisplayableList(todos.dueLater()));
