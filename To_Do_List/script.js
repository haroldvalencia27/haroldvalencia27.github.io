const addButton = document.getElementById("add-task");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

window.addEventListener("load", loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        createTaskElement(task.content, task.completed);
    });
}

addButton.addEventListener("click", () => {
    const taskContent = taskInput.value.trim();
    if (taskContent !== "") {
        createTaskElement(taskContent, false);
        saveTask(taskContent, false);
        taskInput.value = "";
    }
});

function createTaskElement(taskContent, completed) {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => toggleTaskCompletion(checkbox, taskContent, li));
    li.appendChild(checkbox);

    const span = document.createElement("span");
    span.textContent = taskContent;
    if (completed) span.classList.add("completed");
    li.appendChild(span);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("task-actions");

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "✏️";
    editButton.addEventListener("click", () => editTask(span, taskContent));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => removeTask(li, taskContent));

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    li.appendChild(buttonContainer);

    taskList.appendChild(li);
}

function saveTask(taskContent, completed) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ content: taskContent, completed: completed });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function editTask(span, oldContent) {
    const newContent = prompt("Editar tarea:", oldContent);
    if (newContent && newContent.trim() !== "") {
        span.textContent = newContent;
        updateTask(oldContent, newContent);
    }
}

function updateTask(oldContent, newContent) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskIndex = tasks.findIndex(task => task.content === oldContent);
    if (taskIndex !== -1) {
        tasks[taskIndex].content = newContent;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}
function toggleTaskCompletion(checkbox, taskContent, li) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskIndex = tasks.findIndex(task => task.content === taskContent);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = checkbox.checked;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    li.querySelector("span").classList.toggle("completed");
}

function removeTask(li, taskContent) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter(task => task.content !== taskContent);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    li.remove();
}
