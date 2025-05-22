const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    return all.filter((item) => item.dueDate < new Date().toLocaleDateString("en-CA"));
  }

  const dueToday = () => {
    return all.filter((item) => item.dueDate == new Date().toLocaleDateString("en-CA"));
  }

  const dueLater = () => {
    return all.filter((item) => item.dueDate > new Date().toLocaleDateString("en-CA"));
  }

  const toDisplayableList = (list) => {
    const today=formattedDate(new Date())
    return list.map((item) => {
      const status = item.completed ? "[x]" : "[ ]"
      const dueDate = item.dueDate === today ? "" : item.dueDate
      return `${status} ${item.title} ${dueDate}`.trim()
    }).join("\n")
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

module.exports=todoList;