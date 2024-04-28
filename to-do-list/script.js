function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    
    if (task !== "") {
      let taskList = document.getElementById("taskList");
      let li = document.createElement("li");
      li.textContent = task;
      let deleteButton = document.createElement("span");
      deleteButton.textContent = " ❌";
      deleteButton.classList.add("delete");
      deleteButton.onclick = function() {
        taskList.removeChild(li);
      };
      
      li.appendChild(deleteButton);
      taskList.appendChild(li);
      
      input.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  