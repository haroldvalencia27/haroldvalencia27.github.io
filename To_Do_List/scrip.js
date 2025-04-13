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
