// Seleccionamos los elementos del DOM
const addButton = document.getElementById("add-task");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Cargar tareas desde localStorage al cargar la página
window.addEventListener("load", loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        createTaskElement(task.content, task.completed);
    });
}

// Agregar tarea cuando se haga clic en el botón
addButton.addEventListener("click", () => {
    const taskContent = taskInput.value.trim();

    if (taskContent !== "") {
        // Crear la tarea y agregarla a la lista visual
        createTaskElement(taskContent, false);

        // Guardar la tarea en localStorage
        saveTask(taskContent, false);

        // Limpiar el input
        taskInput.value = "";
    }
});

// Crear el elemento de la tarea y agregarlo a la lista
function createTaskElement(taskContent, completed) {
    const li = document.createElement("li");
    li.classList.add("task-item");

    // Agregar checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => toggleTaskCompletion(checkbox, taskContent, li));
    li.appendChild(checkbox);

    // Agregar texto de la tarea
    const span = document.createElement("span");
    span.textContent = taskContent;
    if (completed) {
        span.classList.add("completed");
    }
    li.appendChild(span);

    // Botón para eliminar tarea
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => removeTask(li, taskContent));
    li.appendChild(deleteButton);

    taskList.appendChild(li);
}

// Guardar tarea en localStorage
function saveTask(taskContent, completed) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ content: taskContent, completed: completed });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Cambiar el estado de la tarea a completada/no completada
function toggleTaskCompletion(checkbox, taskContent, li) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskIndex = tasks.findIndex(task => task.content === taskContent);

    if (taskIndex !== -1) {
        tasks[taskIndex].completed = checkbox.checked;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Marcar visualmente como completada
    li.querySelector("span").classList.toggle("completed");
}

// Eliminar tarea
function removeTask(li, taskContent) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter(task => task.content !== taskContent);

    // Actualizar localStorage después de eliminar
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Eliminar la tarea de la lista visual
    li.remove();
}
