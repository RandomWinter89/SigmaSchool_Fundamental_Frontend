const tasks = [];

function addTask() {
  const task = prompt('Enter a new task: ');

  if (task.trim().length == 0 || isNaN(task))
    return alert("No empty space");

  tasks.push(task);

  alert('Task added!');
}

function viewTask() {
  let taskList = 'Tasks:\n';

  for (const task of tasks) {
    taskList += `- ${task}\n`;
  }

  alert(taskList);
}

function removeTask() {
    const task = parseInt(prompt("Specified the index to remove from the list: "));
    console.log(task);

    if (isNaN(task) || task === -1)
        return;

    tasks.splice(task, 1);
    alert(`Index ${task} has been removed from the list`);
}

function modifyTask() {
    const id = parseInt(prompt("Specified the index to modify from the list: "));

    if (isNaN(id) || id === -1)
        return;

    const newValue = prompt("Enter new value: ");

    if (isNaN(newValue) || newValue.trim().length == 0)
        return;

    tasks[id] = newValue;

    alert(`Index ${id} has been modified from the list`);
}