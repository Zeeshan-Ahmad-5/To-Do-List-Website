// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const taskinput = document.getElementById("task");
    const btn = document.getElementById("addTask");
    const tasklist = document.getElementById("taskList");

    btn.addEventListener("click", function () {
        const task = taskinput.value.trim();

        if (task === "") {
            alert("Please enter a task");
        } else {
            let li = document.createElement("li");
            
            // Add checkbox FIRST
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "task-checkbox";
            li.appendChild(checkbox);
            
            // Create task text span SECOND
            let taskText = document.createElement("span");
            taskText.textContent = task;
            taskText.className = "task-text";
            li.appendChild(taskText);
            
            // Add edit button
            let editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.className = "edit-btn";
            editBtn.onclick = function() {
                let newTask = prompt("Edit task:", taskText.textContent);
                if (newTask !== null && newTask.trim() !== "") {
                    taskText.textContent = newTask.trim();
                }
            };
            editBtn.style.backgroundColor = "green";
            editBtn.style.color = "white";
            editBtn.style.width = "40px";
            li.appendChild(editBtn);
            
            // Add delete button
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";
            deleteBtn.onclick = function() {
                li.remove();
            };
            li.appendChild(deleteBtn);
            
            // Add checkbox functionality AFTER creating all elements
            checkbox.onclick = function() {
                if (checkbox.checked) {
                    taskText.style.textDecoration = "line-through";
                } else {
                    taskText.style.textDecoration = "none";
                }
            };
            
            tasklist.appendChild(li);
            taskinput.value = "";
        }
    });

    taskinput.addEventListener("keypress", function (evt) {
        if (evt.key === "Enter") {
            evt.preventDefault(); // Prevent form submission
            btn.click();
        }
    });
});
