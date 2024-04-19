let createTaskBox = document.querySelector(".task-details-input")
let taskName = document.querySelector("#task-name")
let taskList = document.querySelector(".tasks-list")
let taskDate = document.querySelector("#task-date")
let taskContainer = document.querySelector(".task-container")
let wrapper = document.querySelector(".wrapper")
let addTasksMsg = document.querySelector(".add-tasks-msg")


function createTask(){
    createTaskBox.style.display = "block"
    wrapper.style.display = "block"
}

function addTask(){
    if(taskName.value === ''){
        alert("Enter Task Name!")
    }

    else{
        if(taskDate.value != ''){
            let li = document.createElement("li");
            let taskNameText = document.createElement("p")
            let taskDateText = document.createElement("p")
            taskNameText.innerHTML = taskName.value;
            taskDateText.innerHTML = taskDate.value;
            li.appendChild(taskNameText)
            li.appendChild(taskDateText)
            taskList.appendChild(li)
            createTaskBox.style.display = "none"
            wrapper.style.display = "none"
            addTasksMsg.style.display = "none";
        }
        else{
        let li = document.createElement("li");
        let taskNameText = document.createElement("p")
        taskNameText.innerHTML = taskName.value;
        li.appendChild(taskNameText)
        taskList.appendChild(li)
        createTaskBox.style.display = "none"
        wrapper.style.display = "none"
        addTasksMsg.style.display = "none"
        }

        taskName.value = "";
        taskDate.value = "";
    }
}

taskContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
},false)

function Close(){
    createTaskBox.style.display = "none"
    wrapper.style.display = "none"
}

// function saveData(){
//     localStorage.setItem("data", taskList.innerHTML);
// }

// function showTask(){
//     taskList.innerHTML = localStorage.getItem("data");
// }
// showTask()