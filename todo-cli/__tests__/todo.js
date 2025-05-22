const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo list Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test Todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test Todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Should mark todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should retrieve overdue todos", () => {
    add({
      title: "Old Overdue Todo",
      completed: false,
      dueDate: "2000-01-01",
    });

    const overdueItems = overdue();
    const hasOverdue = overdueItems.some(
      (todo) => todo.title === "Old Overdue Todo",
    );

    expect(hasOverdue).toBe(true);
  });
  test("Should retrieve due today todos", () => {
    const today = new Date().toISOString().split("T")[0];

    add({
      title: "Today Specific Todo",
      completed: false,
      dueDate: today,
    });

    const todayItems = dueToday();
    const hasToday = todayItems.some(
      (todo) => todo.title === "Today Specific Todo",
    );

    expect(hasToday).toBe(true);
  });

  test("Should retrieve due later todos", () => {
    const tomorrow = new Date(Date.now() + 86400000)
      .toISOString()
      .split("T")[0];

    add({
      title: "Future Specific Todo",
      completed: false,
      dueDate: tomorrow,
    });

    const laterItems = dueLater();
    const hasFuture = laterItems.some(
      (todo) => todo.title === "Future Specific Todo",
    );

    expect(hasFuture).toBe(true);
  });
});
