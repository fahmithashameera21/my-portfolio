function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark as done
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete on double click
    li.addEventListener("dblclick", () => {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = "";
}
