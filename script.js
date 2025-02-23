document.addEventListener("DOMContentLoaded", loadTasks);

        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();

            if (taskText === "") {
                alert("กรุณากรอกรายการที่ต้องทำด้วยครับ");
                return;
            }

            let taskList = document.getElementById("taskList");

            let li = document.createElement("li");
            li.innerHTML = `${taskText} <button class="delete" onclick="deleteTask(this)">X</button>`;
            taskList.appendChild(li);

            saveTasks();
            taskInput.value = "";
        }

        function deleteTask(button) {
            button.parentElement.remove();
            saveTasks();
        }

        function saveTasks() {
            let tasks = [];
            document.querySelectorAll("#taskList li").forEach(li => {
                tasks.push(li.firstChild.textContent);
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        function loadTasks() {
            let savedTasks = JSON.parse(localStorage.getItem("tasks"));
            if (savedTasks) {
                let taskList = document.getElementById("taskList");
                savedTasks.forEach(taskText => {
                    let li = document.createElement("li");
                    li.innerHTML = `${taskText} <button class="delete" onclick="deleteTask(this)">X</button>`;
                    taskList.appendChild(li);
                });
            }
        }