function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value;
    if (taskText) {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const taskList = document.getElementById('task-list');
    taskList.removeChild(button.parentElement);
}
