function addTask(event){
    
    let input = document.querySelectorAll("input")[0];
    let task = input.value.trim();
    
    let li = document.createElement("li");

    let taskList = document.getElementById("taskList");

    li.innerHTML = task + "<span class='delete'> ❌</span>";
    li.className = "task-item";
    taskList.appendChild(li);

    input.value = "";
    event.preventDefault();
}