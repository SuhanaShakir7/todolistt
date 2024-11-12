const addButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMsg = document.getElementById("emptyMsg");

addButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `${taskText} <button onclick="deleteTask(this)">❌</button>`;

        taskList.appendChild(taskItem);
        taskInput.value = ""; 
        updateEmptyMessage();
    } else{
        alert("Please enter a task")
    }
});

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
    updateEmptyMessage();
}

function updateEmptyMessage() {
    if (taskList.children.length === 0) {
        emptyMsg.style.display = "block";
    } else {
        emptyMsg.style.display = "none";
    }
}

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addButton.click();
    }
});